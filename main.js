const flexObj = {
  // Init Function
  init: function(){
    // Build Flex Container & Children
    this.buildFlexContainer();
    this.buildFlexChildren();

    // buildProperties
    this.buildProperties();

    // Set default Styles
    // this.styleJustifyContent();
  },

  buildProperties: function(){
    let html = '';
    properties.forEach((ele, index) => {
      // let funName = `flexObj.style${ele.key}`;
      html += '<div class="form-ele">';
      html += `<label>${ele.label}</label>`;
      // html += `<p>${ele.definition}</p>`;
      html += `<select onchange="flexObj.changeStyles('${ele.key}', this.value)">`;
        if(ele.options.length){
          ele.options.forEach((op, opIndex)=>{
            html += `<option value="${op.value}" checked="${opIndex === 0}">${op.key}</option>`;
          })
        }
      html += `</select>`;
      // html += `<hr/>`;
      html += `</div>`;
    })
    document.getElementById("properties").innerHTML = html;
  },

  // Build Flex Container Html Element
  buildFlexContainer: function(){
    let html = '';
    html += `<div class="flex-container" id="parentContainer" style="">`;
    html += `</div>`;
    document.getElementById("flexRoot").innerHTML = html;
  },

  // Build Flex Child Html Elements
  buildFlexChildren: function(){
    let inputChildNumbers = document.getElementById('inputChildNumbers');
    let inputValue = inputChildNumbers.value;
    let html = '';
    if(inputValue && inputValue > 0){
      for(let i = 0; i < inputValue; i++){
        html += `<div style=""> ${i+1}`;
        html += `</div>`;
      }
    }else{
      alert('enter value greater than 1');
      inputChildNumbers.value = 1;
    }
    document.getElementById("parentContainer").innerHTML = html;
  },

  //Change Children Count from Input 
  changeChildrenCount: function(value){
    // console.log(value)
    this.init();
  },

  //Change Styles of Flex Html Elements
  changeStyles: function(key, value){

    // console.log(key, value)
    // if(key === 'alignContent'){
    //   parentContainer.style.height = 600;
    // }

    if(key && value){
      parentContainer.style[key] = value;
    }
  },
}

flexObj.init();