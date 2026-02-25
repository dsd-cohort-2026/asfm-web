const medicalLogService = require('./medical-logs.service');

exports.getAllMedicalLogs = async (req, res) => {
  try {
    const medicalLogs = await medicalLogService.getAllMedicalLogs();
    res.status(200).json(medicalLogs);
  } catch (error) {
    console.error("Error fetching medical logs:", error);
    res.status(500).json({ message: "An error occurred while fetching medical logs" });
  }
}

exports.getMedicalLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const medicalLog = await medicalLogService.getMedicalLogById(id);
    if (!medicalLog) {
      return res.status(404).json({ message: "Medical log was not found" });
    }
    res.status(200).json(medicalLog);
  } catch (error) {
    console.error(`Error fetching medical log with id ${id}:`, error);
    res.status(500).json({ message: "An error occurred while fetching a single medical log" });
  }
}
