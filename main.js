let flexItemCount = 2;

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
    html += `<div class="playground-container" id="parentContainer">`;
    html += `</div>`;
    document.getElementById("flexPlayground").innerHTML = html;
  },

  // Build Flex Child Html Elements
  buildFlexChildren: function(){
    let inputChildNumbers = document.getElementById('inputChildNumbers');
    let inputValue = 2;//inputChildNumbers.value;
    let html = '';
    
    if(inputValue && inputValue > 0){
      for(let i = 0; i < inputValue; i++){
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        html += `<div class="playground-items" data-item="${i+1}" onclick="flexObj.removeFlexChild(${i+1})" style="background-color: ${randomColor}"> ${i+1}`;
        html += `</div>`;
      }
    }else{
      alert('enter value greater than 1');
      inputChildNumbers.value = 1;
    }
    document.getElementById("parentContainer").innerHTML = html;
  },
  createFlexChild: function () {
    
  },
  addFlexChild: function(){
    let node = document.createElement("DIV");
    node.classList.add('playground-items');

    // let count = document.querySelectorAll('.playground-items').length;
    // Update global variable onclick as well as removeFlexChild 
    flexItemCount = flexItemCount+1;

    let textnode = document.createTextNode(`${flexItemCount}`);
    node.appendChild(textnode);

    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    node.style.backgroundColor = randomColor;

    node.setAttribute("data-item", flexItemCount);
    node.setAttribute("onclick", `flexObj.removeFlexChild(${flexItemCount})`);

    document.getElementById("parentContainer").appendChild(node);
  },
  
  removeFlexChild: function(index){
    if(index){
      let myobj = document.querySelectorAll(`[data-item="${index}"]`);
      if(myobj){
        myobj[0].remove(); 
      }
    }
  },

  //Change Children Count from Input 
  changeChildrenCount: function(value){
    this.init();
  },

  //Change Styles of Flex Html Elements
  changeStyles: function(key, value){
    if(key && value){
      parentContainer.style[key] = value;
    }
  },
}

flexObj.init();
// Construct Flex playground and Properties list


const slider = {
  inputEle: document.getElementById("myRange"),
  flexItems: document.querySelectorAll('.playground-items'),
  minValue: 0,
  maxValue: 500,
  currentValue: 80,
  changeFlexItemsStyles: function(key, value){
    let items = document.querySelectorAll('.playground-items');
    if(key && value){
      for (let i = 0; i < items.length; i++) {
        items[i].style[key] = value;
      }
    }
  },
  init: function(){
    console.log('d', this.inputEle)
    this.inputEle.setAttribute("min", this.minValue);
    this.inputEle.setAttribute("max", this.maxValue);
    this.inputEle.setAttribute("value", this.currentValue);
    this.changeFlexItemsStyles('minWidth', this.currentValue);
  }
}

slider.init();
 
slider.inputEle.oninput = function() {
  let widthValue = this.value;
  slider.changeFlexItemsStyles('minWidth', widthValue);
}

// Range Slider