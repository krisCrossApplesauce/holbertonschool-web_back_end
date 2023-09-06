export default function createReportObject(employeesList) {
  const reportList = {
    [allEmployees]: {
      ...employeesList,
    },
    [getNumberOfDepartments]: employeesList.length,
  };

  return reportList;
}
