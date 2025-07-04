import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import ITInfrastructure from './pages/ITInfrastructure';
import NetworkManagement from './pages/NetworkManagement';
import EndUserComputing from './pages/EndUserComputing';
import CyberSecurity from './pages/CyberSecurity';
import ServerAdministration from './pages/ServerAdministration';
import LANCablingSurveillance from './pages/LANCablingSurveillance';
import SoftwareSolutions from './pages/SoftwareSolutions';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import WebDesignDevelopment from './pages/WebDesignDevelopment';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import DigitalSolutions from './pages/DigitalSolutions';
import WorkforceManagement from './pages/WorkforceManagement';
import PayrollCompliance from './pages/PayrollCompliance';
import DataAnalyticsVisualization from './pages/DataAnalyticsVisualization';
import AutomationDigitalTransformation from './pages/AutomationDigitalTransformation';
import TrainingDevelopment from './pages/TrainingDevelopment';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/infrastructure" element={<ITInfrastructure />} />
          <Route path="/technology/software" element={<SoftwareSolutions />} />
          <Route path="/technology/digital" element={<DigitalSolutions />} />
          <Route path="/web-design-development" element={<WebDesignDevelopment />} />
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/consulting/workforce" element={<WorkforceManagement />} />
          <Route path="/consulting/payroll" element={<PayrollCompliance />} />
          <Route path="/data-analytics-visualization" element={<DataAnalyticsVisualization />} />
          <Route path="/automation-digital-transformation" element={<AutomationDigitalTransformation />} />
          <Route path="/network-management" element={<NetworkManagement />} />
          <Route path="/end-user-computing" element={<EndUserComputing />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/server-administration" element={<ServerAdministration />} />
          <Route path="/lan-cabling-surveillance" element={<LANCablingSurveillance />} />
          <Route path="/software-solutions" element={<SoftwareSolutions />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/consulting/workforce" element={<Consulting />} />
          <Route path="/consulting/payroll" element={<Consulting />} />
          <Route path="/consulting/training" element={<TrainingDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;