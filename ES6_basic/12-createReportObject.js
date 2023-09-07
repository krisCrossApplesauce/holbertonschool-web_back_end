export default function createReportObject(employeesList) {
  const reportList = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      Object.keys(employeesList).length;
    },
  };

  return reportList;
}
