import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Modal from './components/Modal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ContentList from './pages/admin/ContentList';
import ContentEditorPage from './pages/admin/ContentEditor';

const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if current route is admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/infrastructure" element={<ITInfrastructure onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/technology/software" element={<SoftwareSolutions />} />
        <Route path="/technology/digital" element={<DigitalSolutions onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/web-design-development" element={<WebDesignDevelopment onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/application-development" element={<ApplicationDevelopment onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/consulting/workforce" element={<WorkforceManagement onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/consulting/payroll" element={<PayrollCompliance onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/data-analytics-visualization" element={<DataAnalyticsVisualization />} />
        <Route path="/automation-digital-transformation" element={<AutomationDigitalTransformation />} />
        <Route path="/network-management" element={<NetworkManagement />} />
        <Route path="/end-user-computing" element={<EndUserComputing />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/server-administration" element={<ServerAdministration />} />
        <Route path="/lan-cabling-surveillance" element={<LANCablingSurveillance />} />
        <Route path="/software-solutions" element={<SoftwareSolutions onOpenModal={() => setIsModalOpen(true)}/>}/>
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/consulting/training" element={<TrainingDevelopment onOpenModal={() => setIsModalOpen(true)}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/:contentType" element={<ContentList />} />
        <Route path="/admin/:contentType/new" element={<ContentEditorPage />} />
        <Route path="/admin/:contentType/edit/:id" element={<ContentEditorPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      {!isAdminRoute && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;