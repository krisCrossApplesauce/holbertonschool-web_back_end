export default function createReportObject(employeesList) {
  const reportList = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: Object.keys(employeesList).length,
  };

  return reportList;
}
