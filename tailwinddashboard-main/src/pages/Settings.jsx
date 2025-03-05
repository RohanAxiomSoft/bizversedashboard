import React, { useState, useRef } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Settings = () => {
  const toast = useRef(null);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const showSuccess = (message) => {
    toast.current.show({ severity: "success", summary: "Success", detail: message, life: 3000 });
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white flex">
      <Toast ref={toast} />
      
   
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <ul className="space-y-2">
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">My Account</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Notifications</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Connected Apps</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Plans</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Billing & Invoices</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Give Feedback</li>
        </ul>
      </div>

      <div className="w-3/4 p-6">
        <TabView>
         
          <TabPanel header="My Account">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <InputText className="w-full p-2 rounded bg-gray-700 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <InputText className="w-full p-2 rounded bg-gray-700 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium">Change Password</label>
                <InputText type="password" className="w-full p-2 rounded bg-gray-700 text-white" />
              </div>
              <Button label="Save Changes" icon="pi pi-check" className="mt-4" onClick={() => showSuccess("Account updated!")} />
            </div>
          </TabPanel>

    
          <TabPanel header="My Notifications">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <Checkbox checked={emailNotifications} onChange={(e) => setEmailNotifications(e.checked)} />
                <label>Email Notifications</label>
              </div>
              <Button label="Save Preferences" icon="pi pi-check" className="mt-4" onClick={() => showSuccess("Notification settings saved!")} />
            </div>
          </TabPanel>

   
          <TabPanel header="Connected Apps">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p>No connected apps yet.</p>
              <Button label="Connect App" icon="pi pi-link" className="mt-4" />
            </div>
          </TabPanel>

          <TabPanel header="Plans">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p>Your current plan: <strong>Pro</strong></p>
              <Button label="Upgrade Plan" icon="pi pi-arrow-up" className="mt-4" />
            </div>
          </TabPanel>

          
          <TabPanel header="Billing & Invoices">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p>No invoices available.</p>
              <Button label="View Billing" icon="pi pi-file" className="mt-4" />
            </div>
          </TabPanel>

       
          <TabPanel header="Give Feedback">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <InputText className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Write your feedback..." />
              <Button label="Submit Feedback" icon="pi pi-send" className="mt-4" onClick={() => showSuccess("Feedback submitted!")} />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Settings;
