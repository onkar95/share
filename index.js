
<div class="report-container">
  <div class="section">
    <div class="icon green"><span>🔍</span></div>
    <h3 class="title green">Professional<br>Summary</h3>
    <p>Family wealth<br>goals on track,<br>educational trusts<br>fully funded</p>
  </div>

  <div class="section">
    <div class="icon blue"><span>🧠</span></div>
    <h3 class="title blue">Key Risks</h3>
    <p>Estate tax<br>exposure<br>increasing due to<br>appreciation.</p>
  </div>

  <div class="section">
    <div class="icon teal"><span>🧬</span></div>
    <h3 class="title teal">Opportunities</h3>
    <p>New tax-efficient<br>gifting strategies<br>available</p>
  </div>

  <div class="section">
    <div class="icon gray"><span>🗂️</span></div>
    <h3 class="title gray">Key Actions</h3>
    <p>Review estate<br>planning<br>Update charitable<br>giving strategy.</p>
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
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 40px 20px;
  background: #1a1a1a;
  position: relative;
}

.section {
  text-align: center;
  max-width: 200px;
  position: relative;
  z-index: 1;
}

.icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
  position: relative;
  z-index: 2;
}

.icon.green { background-color: #5cbf5c; }
.icon.blue { background-color: #4aa4df; }
.icon.teal { background-color: #66cccc; }
.icon.gray { background-color: #8b8b8b; }

.title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.title.green { color: #80ff80; }
.title.blue { color: #66ccff; }
.title.teal { color: #99ffff; }
.title.gray { color: #d3bdbd; }

p {
  font-size: 14px;
  line-height: 1.4;
}

/* Looping yellow path (simplified mimic) */
.report-container::before {
  content: "";
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 120px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 40px,
    gold 40px,
    gold 45px,
    transparent 45px,
    transparent 80px
  );
  z-index: 0;
  mask-image: radial-gradient(circle, black 50%, transparent 51%);
  opacity: 0.4;
  }
  
