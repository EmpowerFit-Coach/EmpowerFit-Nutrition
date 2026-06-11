// EmpowerFit Nutrition App — Main Logic

let state = {
  client: { name:"", age:"", sex:"male", weight:"", height:"", activity:"", goal:"", notes:"" },
  meals: { breakfast:[], snack1:[], lunch:[], snack2:[], dinner:[], snack3:[] },
  targets: null,
  customCalories: null
};

// ── CALCULATIONS ──────────────────────────────────────────────────────────────
function calculateBMR(w,h,a,sex){
  return sex==="male" ? (10*w)+(6.25*h)-(5*a)+5 : (10*w)+(6.25*h)-(5*a)-161;
}
function calculateTDEE(bmr,actKey){ return Math.round(bmr*ACTIVITY_MULTIPLIERS[actKey]); }
function calculateTargets(weight,tdee,goalKey,customCals){
  const adj = GOALS[goalKey].adjustment;
  const targetCals = customCals!==null ? customCals : tdee+adj;
  const protein = Math.round(weight*2.2);
  const fat     = Math.round(weight*0.8);
  const carbs   = Math.max(0,Math.round((targetCals-(protein*4)-(fat*9))/4));
  return { calories:Math.round(targetCals), protein, carbs, fat };
}
function calcFood(name,grams){
  const f=FOOD_DATABASE[name]; if(!f) return null;
  const r=grams/100;
  return {
    calories: Math.round(f.calories*r*10)/10,
    protein:  Math.round(f.protein*r*10)/10,
    carbs:    Math.round(f.carbs*r*10)/10,
    fat:      Math.round(f.fat*r*10)/10,
    fibre:    Math.round(f.fibre*r*10)/10,
    sodium:   Math.round(f.sodium*r)
  };
}
function mealTotals(id){
  return state.meals[id].reduce((a,item)=>{
    const m=calcFood(item.food,item.grams);
    if(m){a.calories+=m.calories;a.protein+=m.protein;a.carbs+=m.carbs;a.fat+=m.fat;a.fibre+=m.fibre;a.sodium+=m.sodium;}
    return a;
  },{calories:0,protein:0,carbs:0,fat:0,fibre:0,sodium:0});
}
function dayTotals(){
  return Object.keys(state.meals).reduce((a,id)=>{
    const t=mealTotals(id);
    a.calories+=t.calories;a.protein+=t.protein;a.carbs+=t.carbs;a.fat+=t.fat;a.fibre+=t.fibre;a.sodium+=t.sodium;
    return a;
  },{calories:0,protein:0,carbs:0,fat:0,fibre:0,sodium:0});
}
function fmt(v){ return Math.round(v*10)/10; }

// ── UI ────────────────────────────────────────────────────────────────────────
function recalculate(){
  state.client.name     = document.getElementById('clientName').value;
  state.client.age      = parseFloat(document.getElementById('clientAge').value);
  state.client.sex      = document.getElementById('clientSex').value;
  state.client.weight   = parseFloat(document.getElementById('clientWeight').value);
  state.client.height   = parseFloat(document.getElementById('clientHeight').value);
  state.client.activity = document.getElementById('clientActivity').value;
  state.client.goal     = document.getElementById('clientGoal').value;
  state.client.notes    = document.getElementById('clientNotes').value;
  const {weight,height,age,sex,activity,goal} = state.client;
  if(!weight||!height||!age||!activity||!goal) return;
  const bmr  = calculateBMR(weight,height,age,sex);
  const tdee = calculateTDEE(bmr,activity);
  const targets = calculateTargets(weight,tdee,goal,state.customCalories);
  state.targets = targets;
  document.getElementById('bmrDisplay').textContent     = Math.round(bmr);
  document.getElementById('tdeeDisplay').textContent    = tdee;
  document.getElementById('targetCalDisplay').textContent     = targets.calories;
  document.getElementById('targetProteinDisplay').textContent = targets.protein+'g';
  document.getElementById('targetCarbsDisplay').textContent   = targets.carbs+'g';
  document.getElementById('targetFatDisplay').textContent     = targets.fat+'g';
  if(!state.customCalories) document.getElementById('customCalories').value = targets.calories;
  updateDayBar(); updateAllMealTotals();
}
function updateDayBar(){
  if(!state.targets) return;
  const t=dayTotals(), tg=state.targets;
  ['calories','protein','carbs','fat'].forEach(f=>{
    const el=document.getElementById(`total${f.charAt(0).toUpperCase()+f.slice(1)}`);
    if(el) el.textContent=fmt(t[f]);
    const bar=document.getElementById(`bar_${f}`);
    if(bar){
      const pct=Math.min(100,Math.round((t[f]/tg[f])*100));
      bar.style.width=pct+'%';
      bar.style.backgroundColor=pct>105?'#ff4444':pct>95?'#00ff88':'#00cfff';
    }
  });
}
function updateAllMealTotals(){ MEAL_SLOTS.forEach(s=>updateMealTotals(s.id)); }
function updateMealTotals(id){
  const t=mealTotals(id);
  const el=document.getElementById(`meal_totals_${id}`);
  if(el) el.innerHTML=`<span>${fmt(t.calories)} kcal</span><span>P:${fmt(t.protein)}g</span><span>C:${fmt(t.carbs)}g</span><span>F:${fmt(t.fat)}g</span>`;
  updateDayBar();
}

// ── FOOD MANAGEMENT ───────────────────────────────────────────────────────────
function addFoodItem(id){
  const input=document.getElementById(`food_input_${id}`);
  const gramsEl=document.getElementById(`grams_input_${id}`);
  const name=input.value.trim(); const grams=parseFloat(gramsEl.value);
  if(!FOOD_DATABASE[name]){input.style.borderColor='#ff4444';setTimeout(()=>input.style.borderColor='',1500);return;}
  if(!grams||grams<=0){gramsEl.style.borderColor='#ff4444';setTimeout(()=>gramsEl.style.borderColor='',1500);return;}
  state.meals[id].push({food:name,grams});
  input.value=''; gramsEl.value=''; hideSuggestions(id);
  renderMealItems(id); updateMealTotals(id);
}
function removeFoodItem(id,idx){
  state.meals[id].splice(idx,1);
  renderMealItems(id); updateMealTotals(id);
}
function renderMealItems(id){
  const container=document.getElementById(`meal_items_${id}`);
  if(!container) return;
  const items=state.meals[id];
  if(!items.length){container.innerHTML='<div class="empty-meal">No foods added yet</div>';return;}
  container.innerHTML=items.map((item,i)=>{
    const m=calcFood(item.food,item.grams);
    const unit=FOOD_DATABASE[item.food]?.unit||'g';
    return `<div class="food-item">
      <div class="food-item-name"><span class="food-name">${item.food}</span><span class="food-amount">${item.grams}${unit}</span></div>
      <div class="food-item-macros"><span>${fmt(m.calories)} kcal</span><span>P:${fmt(m.protein)}g</span><span>C:${fmt(m.carbs)}g</span><span>F:${fmt(m.fat)}g</span></div>
      <button class="remove-btn" onclick="removeFoodItem('${id}',${i})">✕</button>
    </div>`;
  }).join('');
}

// ── AUTOCOMPLETE ──────────────────────────────────────────────────────────────
function showSuggestions(id){
  const input=document.getElementById(`food_input_${id}`);
  const dropdown=document.getElementById(`suggestions_${id}`);
  const q=input.value.toLowerCase();
  if(!q||q.length<2){dropdown.style.display='none';return;}
  const matches=Object.keys(FOOD_DATABASE).filter(n=>n.toLowerCase().includes(q)).slice(0,8);
  if(!matches.length){dropdown.style.display='none';return;}
  dropdown.innerHTML=matches.map(name=>{
    const f=FOOD_DATABASE[name];
    return `<div class="suggestion-item" onclick="selectFood('${id}','${name.replace(/'/g,"\\'")}')">
      <span class="sug-name">${name}</span>
      <span class="sug-cat">${f.category}</span>
      <span class="sug-macros">${f.calories}kcal | P:${f.protein}g C:${f.carbs}g F:${f.fat}g per 100${f.unit}</span>
    </div>`;
  }).join('');
  dropdown.style.display='block';
}
function selectFood(id,name){
  document.getElementById(`food_input_${id}`).value=name;
  hideSuggestions(id);
  document.getElementById(`grams_input_${id}`).focus();
}
function hideSuggestions(id){
  const d=document.getElementById(`suggestions_${id}`);
  if(d) d.style.display='none';
}

// ── CUSTOM CALORIES ───────────────────────────────────────────────────────────
function applyCustomCalories(){
  const v=parseFloat(document.getElementById('customCalories').value);
  if(v&&v>0){state.customCalories=v;recalculate();}
}
function resetToCalculated(){state.customCalories=null;recalculate();}

// ── PDF GENERATION (jsPDF — downloads as real file) ───────────────────────────
function generatePDF(){
  const {jsPDF}=window.jspdf;
  const {name,age,sex,weight,height,activity,goal,notes}=state.client;
  if(!name||!state.targets){alert('Please fill in client details and calculate targets first.');return;}

  const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  const targets=state.targets;
  const totals=dayTotals();
  const W=210; const margin=14;
  let y=margin;

  // ── COLOURS ──
  const DARK=[7,15,26];
  const BLUE=[0,207,255];
  const MID=[13,31,45];
  const WHITE=[255,255,255];
  const LBLUE=[232,246,255];

  // ── HEADER ──
  doc.setFillColor(...DARK);
  doc.rect(0,0,W,38,'F');

  // Logo
  try{
    doc.addImage('data:image/png;base64,'+window.LOGO_BASE64,'PNG',margin,3,30,30);
  }catch(e){}

  doc.setTextColor(...WHITE);
  doc.setFont('helvetica','bold');
  doc.setFontSize(20);
  doc.text('EMPOWERFIT HEALTH',50,14);
  doc.setFontSize(11);
  doc.setTextColor(...BLUE);
  doc.text('Personalised Nutrition Plan',50,21);
  doc.setFontSize(8);
  doc.setTextColor(160,180,200);
  doc.text('Stronger Mind. Stronger Body. Stronger You.',50,27);
  doc.text('Marc Sandles  |  0400 074 078  |  Empowerfit77@gmail.com  |  @Empower_FitPT',50,33);

  // Blue underline
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.5);
  doc.line(margin,38,W-margin,38);
  y=44;

  // ── CLIENT INFO ──
  const clientCols=[[`Client: ${name}`,`Goal: ${goal}`],[`Weight: ${weight}kg`,`Activity: ${activity}`]];
  clientCols.forEach(row=>{
    row.forEach((text,i)=>{
      const x=margin+(i*(W-margin*2)/2);
      doc.setFillColor(...MID);
      doc.roundedRect(x,y,89,8,1,1,'F');
      doc.setFontSize(8);
      doc.setFont('helvetica','bold');
      doc.setTextColor(...WHITE);
      doc.text(text,x+3,y+5.5);
    });
    y+=10;
  });
  y+=4;

  // ── TARGETS ──
  doc.setFillColor(...MID);
  doc.roundedRect(margin,y,W-margin*2,22,2,2,'F');
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin,y,W-margin*2,22,2,2,'S');

  doc.setFont('helvetica','bold');
  doc.setFontSize(8);
  doc.setTextColor(...BLUE);
  doc.text('DAILY TARGETS',margin+3,y+5);

  const macroLabels=[['Total kcal',targets.calories,'kcal'],['Protein',targets.protein+'g',''],['Carbs',targets.carbs+'g',''],['Fat',targets.fat+'g','']];
  macroLabels.forEach(([lbl,val],i)=>{
    const x=margin+10+(i*44);
    doc.setFont('helvetica','bold');
    doc.setFontSize(14);
    doc.setTextColor(...WHITE);
    doc.text(String(val),x,y+16,{align:'center'});
    doc.setFontSize(7);
    doc.setTextColor(120,160,190);
    doc.text(lbl,x,y+21,{align:'center'});
  });
  y+=28;

  // ── MEALS ──
  doc.setFont('helvetica','bold');
  doc.setFontSize(9);
  doc.setTextColor(...BLUE);
  doc.text('MEAL PLAN',margin,y);
  y+=4;

  MEAL_SLOTS.forEach(slot=>{
    const items=state.meals[slot.id];
    if(!items.length) return;
    const t=mealTotals(slot.id);

    // Check page space
    const rowsNeeded=items.length+3;
    if(y+rowsNeeded*7>285){doc.addPage();y=margin;}

    // Meal header
    doc.setFillColor(...MID);
    doc.rect(margin,y,W-margin*2,7,'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(8);
    doc.setTextColor(...WHITE);
    doc.text(slot.label.toUpperCase(),margin+2,y+5);
    doc.setTextColor(...BLUE);
    doc.setFontSize(7);
    doc.text(`${fmt(t.calories)} kcal  |  P:${fmt(t.protein)}g  C:${fmt(t.carbs)}g  F:${fmt(t.fat)}g`,W-margin-2,y+5,{align:'right'});
    y+=7;

    // Column headers
    doc.setFillColor(10,21,32);
    doc.rect(margin,y,W-margin*2,5,'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(6.5);
    doc.setTextColor(...BLUE);
    ['Food',`Amount`,'kcal','Protein','Carbs','Fat'].forEach((h,i)=>{
      const xs=[margin+2,margin+88,margin+105,margin+122,margin+139,margin+154];
      doc.text(h,xs[i],y+3.5);
    });
    y+=5;

    items.forEach((item,idx)=>{
      const m=calcFood(item.food,item.grams);
      const unit=FOOD_DATABASE[item.food]?.unit||'g';
      doc.setFillColor(...(idx%2===0?WHITE:LBLUE));
      doc.rect(margin,y,W-margin*2,5.5,'F');
      doc.setFont('helvetica','normal');
      doc.setFontSize(6.5);
      doc.setTextColor(30,40,50);
      const truncName=item.food.length>50?item.food.substring(0,48)+'...':item.food;
      doc.text(truncName,margin+2,y+4);
      doc.text(`${item.grams}${unit}`,margin+88,y+4);
      doc.text(String(fmt(m.calories)),margin+105,y+4);
      doc.text(fmt(m.protein)+'g',margin+122,y+4);
      doc.text(fmt(m.carbs)+'g',margin+139,y+4);
      doc.text(fmt(m.fat)+'g',margin+154,y+4);
      y+=5.5;
    });
    y+=3;
  });

  // ── DAY TOTALS ──
  if(y+35>285){doc.addPage();y=margin;}
  doc.setFillColor(10,21,32);
  doc.roundedRect(margin,y,W-margin*2,28,2,2,'F');
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin,y,W-margin*2,28,2,2,'S');
  doc.setFont('helvetica','bold');
  doc.setFontSize(8);
  doc.setTextColor(...BLUE);
  doc.text('DAY TOTALS vs TARGETS',margin+3,y+6);

  [['Calories',totals.calories,targets.calories,'kcal'],
   ['Protein',totals.protein,targets.protein,'g'],
   ['Carbs',totals.carbs,targets.carbs,'g'],
   ['Fat',totals.fat,targets.fat,'g']].forEach(([lbl,actual,target,unit],i)=>{
    const x=margin+10+(i*44);
    const diff=Math.round((actual-target)*10)/10;
    const diffStr=diff>0?`+${diff}${unit}`:`${diff}${unit}`;
    const diffColor=Math.abs(diff)<=(target*0.05)?[0,200,130]:diff>0?[255,80,80]:[0,207,255];
    doc.setFont('helvetica','bold');
    doc.setFontSize(13);
    doc.setTextColor(...WHITE);
    doc.text(`${fmt(actual)}${unit}`,x,y+17,{align:'center'});
    doc.setFontSize(7);
    doc.setTextColor(120,160,190);
    doc.text(lbl,x,y+22,{align:'center'});
    doc.setFontSize(7);
    doc.setTextColor(...diffColor);
    doc.text(diffStr+' vs target',x,y+26.5,{align:'center'});
  });
  y+=32;

  // ── MICROS ──
  if(y+20>285){doc.addPage();y=margin;}
  const microFibre=fmt(Object.keys(state.meals).reduce((a,id)=>a+mealTotals(id).fibre,0));
  const microSodium=Math.round(Object.keys(state.meals).reduce((a,id)=>a+mealTotals(id).sodium,0));
  doc.setFillColor(13,24,32);
  doc.roundedRect(margin,y,W-margin*2,14,2,2,'F');
  doc.setFont('helvetica','bold');
  doc.setFontSize(7);
  doc.setTextColor(100,140,170);
  doc.text('MICRONUTRIENT SUMMARY',margin+3,y+5);
  doc.setFont('helvetica','normal');
  doc.setTextColor(...WHITE);
  doc.text(`Dietary Fibre: ${microFibre}g ${parseFloat(microFibre)>=25?'✓':'(aim 25-38g)'}`,margin+3,y+10);
  doc.text(`Sodium: ${microSodium}mg ${microSodium<=2300?'✓':'(check - high)'}`,margin+60,y+10);
  doc.setFontSize(6);
  doc.setTextColor(70,100,120);
  doc.text('Reference: NHMRC Nutrient Reference Values for Australia & New Zealand',margin+3,y+13.5);
  y+=18;

  // ── NOTES ──
  if(notes){
    if(y+20>285){doc.addPage();y=margin;}
    doc.setFillColor(13,24,32);
    doc.roundedRect(margin,y,W-margin*2,18,2,2,'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(7);
    doc.setTextColor(100,140,170);
    doc.text('COACH NOTES',margin+3,y+5);
    doc.setFont('helvetica','normal');
    doc.setTextColor(...WHITE);
    doc.setFontSize(7.5);
    const noteLines=doc.splitTextToSize(notes,W-margin*2-6);
    noteLines.slice(0,3).forEach((line,i)=>doc.text(line,margin+3,y+10+(i*4)));
    y+=20;
  }

  // ── FOOTER ──
  const pageCount=doc.internal.getNumberOfPages();
  for(let i=1;i<=pageCount;i++){
    doc.setPage(i);
    doc.setFillColor(...DARK);
    doc.rect(0,287,W,10,'F');
    doc.setDrawColor(...BLUE);
    doc.setLineWidth(0.3);
    doc.line(margin,287,W-margin,287);
    doc.setFont('helvetica','bold');
    doc.setFontSize(7);
    doc.setTextColor(...BLUE);
    doc.text('EmpowerFit Health — Marc Sandles',margin,293);
    doc.setFont('helvetica','normal');
    doc.setTextColor(130,160,180);
    doc.text('0400 074 078  |  Empowerfit77@gmail.com  |  @Empower_FitPT',margin+50,293);
    doc.text(new Date().toLocaleDateString('en-AU',{day:'numeric',month:'long',year:'numeric'}),W-margin,293,{align:'right'});
  }

  // ── SAVE ──
  const filename=`EmpowerFit_${(name||'Client').replace(/\s+/g,'_')}_NutritionPlan.pdf`;
  doc.save(filename);
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  const actSel=document.getElementById('clientActivity');
  Object.keys(ACTIVITY_MULTIPLIERS).forEach(k=>{
    const o=document.createElement('option');o.value=k;o.textContent=k;actSel.appendChild(o);
  });
  const goalSel=document.getElementById('clientGoal');
  Object.keys(GOALS).forEach(k=>{
    const o=document.createElement('option');o.value=k;o.textContent=k;goalSel.appendChild(o);
  });
  document.addEventListener('click',e=>{
    MEAL_SLOTS.forEach(slot=>{
      const d=document.getElementById(`suggestions_${slot.id}`);
      const inp=document.getElementById(`food_input_${slot.id}`);
      if(d&&inp&&!inp.contains(e.target)&&!d.contains(e.target)) d.style.display='none';
    });
  });
  MEAL_SLOTS.forEach(s=>renderMealItems(s.id));
});
