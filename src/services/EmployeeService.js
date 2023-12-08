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
}

export default new EmployeeService();
