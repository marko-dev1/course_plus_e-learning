
        document.addEventListener('DOMContentLoaded', function() {
            const startBtn = document.getElementById('startBtn');
            const stopBtn = document.getElementById('stopBtn');
            const safetyBtn = document.getElementById('safetyBtn');
            const resetBtn = document.getElementById('resetDemo');
            const motorStatus = document.getElementById('motorStatus');
            const indicatorLight = document.getElementById('indicatorLight');
            
            let startPressed = false;
            let stopPressed = false;
            let safetyClosed = false;
            
            startBtn.addEventListener('click', function() {
                startPressed = true;
                startBtn.style.backgroundColor = '#2ECC71';
                evaluateLogic();
            });
            
            stopBtn.addEventListener('click', function() {
                stopPressed = true;
                stopBtn.style.backgroundColor = '#E74C3C';
                evaluateLogic();
            });
            
            safetyBtn.addEventListener('click', function() {
                safetyClosed = !safetyClosed;
                safetyBtn.style.backgroundColor = safetyClosed ? '#2ECC71' : '#E74C3C';
                safetyBtn.textContent = safetyClosed ? 'Safety Guard: Closed' : 'Safety Guard: Open';
                evaluateLogic();
            });
            
            resetBtn.addEventListener('click', function() {
                startPressed = false;
                stopPressed = false;
                safetyClosed = false;
                
                startBtn.style.backgroundColor = '';
                stopBtn.style.backgroundColor = '';
                safetyBtn.style.backgroundColor = '';
                safetyBtn.textContent = 'Safety Guard';
                
                motorStatus.textContent = 'Motor: OFF';
                motorStatus.style.color = '#E74C3C';
                indicatorLight.textContent = 'Indicator: OFF';
                indicatorLight.style.color = '#E74C3C';
            });
            
            function evaluateLogic() {
                if (startPressed && safetyClosed && !stopPressed) {
                    motorStatus.textContent = 'Motor: ON';
                    motorStatus.style.color = '#2ECC71';
                    indicatorLight.textContent = 'Indicator: ON';
                    indicatorLight.style.color = '#2ECC71';
                } else {
                    motorStatus.textContent = 'Motor: OFF';
                    motorStatus.style.color = '#E74C3C';
                    indicatorLight.textContent = 'Indicator: OFF';
                    indicatorLight.style.color = '#E74C3C';
                }
            }
        });
