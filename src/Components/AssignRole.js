import React from 'react';

const AssignRole = () => {
  const token = '<your_token_here>'; // Replace with your actual token

  const assignCoAdminRole = async () => {
    const url = 'http://findereg.me/api/user/2/co-AdminRole';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Role assigned successfully:', data);
      // Handle successful role assignment (e.g., show a success message)
    } else {
      console.error('Failed to assign role:', response.statusText);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <button onClick={assignCoAdminRole}>Assign Co-Admin Role</button>
    </div>
  );
};

export default AssignRole;
