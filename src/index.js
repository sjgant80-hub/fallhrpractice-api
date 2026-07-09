// fallhrpractice-api · HTTP wrapper · MIT · AI-Native Solutions
import express from 'express';
const app = express();
app.use(express.json());
app.get('/health', (_,res) => res.json({ok:true, service:'fallhrpractice-api', version:'1.0.0'}));
app.get('/', (_,res) => res.json({
  service:'fallhrpractice-api',
  parent:'fallhr',
  purpose:'practice-mode drill scenarios for UK HR compliance',
  endpoints:['GET /health','GET /scenarios','POST /score']
}));
app.get('/scenarios', (_,res) => res.json({scenarios:['s1-part-time-worker','s2-fixed-term-contract','s3-dismissal-fair','s4-tupe-transfer','s5-disciplinary','s6-grievance','s7-flexible-working','s8-parental-leave','s9-redundancy','s10-equal-pay']}));
app.post('/score', (req,res) => res.json({scenario:req.body.scenario||'unknown', score:0.7, passed:true, feedback:'stub · Phase 2 wires FallHR SDK for real scoring'}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`fallhrpractice-api on :${PORT}`));
