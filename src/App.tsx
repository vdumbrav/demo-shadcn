import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from '@/pages/Demo';
import PayrollPlugin from '@/pages/PayrollPlugin';
import PayrollMcp from '@/pages/PayrollMcp';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/payroll-plugin" element={<PayrollPlugin />} />
        <Route path="/payroll-mcp" element={<PayrollMcp />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
