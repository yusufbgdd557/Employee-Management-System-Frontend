import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    async getEmployees() {
        try {
            const response = await axios.get(EMPLOYEE_API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching employees:', error);
            throw error; // Hata durumunda hatayı yeniden fırlat
        }
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new EmployeeService();
