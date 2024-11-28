// Function to calculate BMI
const calculateBMI = () => {
    const inputHeight = document.getElementById("inputHeight");
    const inputWeight = document.getElementById("inputWeight");
    const result = document.getElementById("result");
  
    const height = parseFloat(inputHeight.value);
    const weight = parseFloat(inputWeight.value);
  
    if (height && weight) {
      if (height > 0 && weight > 0) {
        const bmiValue = (weight / (height / 100) ** 2).toFixed(2);
        result.innerHTML = `
            <div class="output">
                <p class="text">Your BMI is</p>
                <p id="bmiValueDisplay" class="para">${bmiValue}</p>
                <p id="bmiCategory" class="text nor"></p>
                <p id="bmiAdvice" class="text nor"></p>
                <p class="tip" >“Health is the greatest wealth.”.</p>
            </div>
        `
  
        const categoryElement = document.getElementById("bmiCategory");
        const adviceElement = document.getElementById("bmiAdvice");
        const bmiBackground = document.getElementById("bmiValueDisplay");
  
        if (bmiValue < 18.5) {
          categoryElement.textContent = "Underweight";
          categoryElement.style.color = "yellow";
          adviceElement.textContent = "Eat something!";
          adviceElement.style.color = "red";
          bmiBackground.style.backgroundColor = "rgb(73, 165, 73)";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          categoryElement.textContent = "Normal";
          categoryElement.style.color = "yellow";
          adviceElement.textContent = "Fit and Healthy!";
          adviceElement.style.color = "green";
          bmiBackground.style.backgroundColor = "green";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          categoryElement.textContent = "Overweight";
          categoryElement.style.color = "yellow";
          adviceElement.textContent = "Loose some weight!";
          adviceElement.style.color = "red";
          bmiBackground.style.backgroundColor = "rgb(236, 96, 96)";
        } else {
          categoryElement.textContent = "Obesity";
          categoryElement.style.color = "yellow";
          adviceElement.textContent = "Focus on you diet plan!";
          adviceElement.style.color = "red";
          bmiBackground.style.backgroundColor = "rgb(249, 11, 11)";
        }
  
        console.log(`BMI Calculated: ${bmiValue}`);
      } else {
        alert("Please enter valid height and weight.");
      }
    } else {
      alert("Please enter both height and weight.");
    }
  };
  
  // Add event listener to the button
  document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
  