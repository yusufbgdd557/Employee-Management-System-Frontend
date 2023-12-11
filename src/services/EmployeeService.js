import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

const EmployeeService = {
  getEmployees: async () => {
    try {
      const response = await axios.get(EMPLOYEE_API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  },

  createEmployee: async (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  },

  getEmployeeById: async (employeeId) => {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  },

  updateEmployee: async (employee, id) => {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
  },
  deleteEmployee: async (employeeId) => {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
}
};

export default EmployeeService;
