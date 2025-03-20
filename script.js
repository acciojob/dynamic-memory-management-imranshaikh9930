// Import stylesheets


const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  // complete the function

	for(let i = 0 ; i< 100;i++){

		const divEle = document.createElement("div");
		divEle.className="element";
		divEle.textContent = `Items ${elements.length +1}`;

		document.getElementById("container").appendChild(divEle);
		elements.push(divEle);
	}
	
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  // complete the function
  elements.forEach(el=> el.remove());
  elements = [];
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
  if (performance.memory) {
    let usedMemory = (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
    document.getElementById("memory").textContent = `Memory Usage: ${usedMemory} MB`;

    if (usedMemory > limit) {
        // alert("Memory limit exceeded! Please remove elements.");
        document.getElementById("memory").textContent = `Memory limit exceeded! Please remove elements.`;
    }
} else {
    document.getElementById("memory").textContent = `Memory Usage: Not supported in this browser`;
}
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
