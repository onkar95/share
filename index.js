<div class="report-container">
  <div class="curve-line"></div>

  <div class="section">
    <div class="circle green"><span>🔍</span></div>
    <h3 class="title green">Professional<br>Summary</h3>
    <p>Family wealth goals on track,<br>educational trusts fully funded</p>
  </div>

  <div class="section">
    <div class="circle blue"><span>🧠</span></div>
    <h3 class="title blue">Key Risks</h3>
    <p>Estate tax exposure increasing<br>due to appreciation.</p>
  </div>

  <div class="section">
    <div class="circle teal"><span>🧬</span></div>
    <h3 class="title teal">Opportunities</h3>
    <p>New tax-efficient gifting<br>strategies available</p>
  </div>

  <div class="section">
    <div class="circle gray"><span>🗂️</span></div>
    <h3 class="title gray">Key Actions</h3>
    <p>Review estate planning<br>Update charitable giving strategy.</p>
  </div>
</div>


body {
  background: #1a1a1a;
  font-family: Arial, sans-serif;
  color: white;
  margin: 0;
  padding: 0;
}

.report-container {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 100px 20px 40px;
  overflow: hidden;
}

.section {
  text-align: center;
  max-width: 200px;
  z-index: 2;
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
}

.green { background-color: #4caf50; }
.blue { background-color: #2196f3; }
.teal { background-color: #00bcd4; }
.gray { background-color: #9e9e9e; }

.title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 5px;
  line-height: 1.2;
}

.title.green { color: #90ee90; }
.title.blue { color: #00bfff; }
.title.teal { color: #66ffff; }
.title.gray { color: #d3bdbd; }

p {
  font-size: 14px;
  line-height: 1.4;
  color: white;
}

/* Looping line effect */
.curve-line {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 150px;
  background: repeating-linear-gradient(
    to right,
    transparent 0 50px,
    #ffcc00 50px 55px,
    transparent 55px 100px
  );
  z-index: 1;
  border-top-left-radius: 75px;
  border-bottom-right-radius: 75px;
  opacity: 0.7;
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
  
