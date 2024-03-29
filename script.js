let memory = 0;

       function addToDisplay(value) {
            let display = document.getElementById('display');
            display.value += value;
        }

        function clearDisplay() {
            let display = document.getElementById('display');
            display.value = '';
        }

        function calculate() {
            let display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                alert('Error in calculation.');
            }
        }

        function memoryAdd() {
            let display = document.getElementById('display');
            memory += parseFloat(display.value);
            display.value = memory;
        }

        function memorySubtract() {
            let display = document.getElementById('display');
            memory -= parseFloat(display.value);
            display.value = memory;
        }

       function memoryRecall() {
            let display = document.getElementById('display');
            display.value = memory;
        }


        function memoryClear() {
            memory = 0;
        }
