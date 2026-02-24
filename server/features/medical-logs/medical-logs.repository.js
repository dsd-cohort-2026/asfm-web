exports.findAll = async () => {

  return [
    {
      id: "550e8400-e29b-41d4-a716-446655770003",
      foster_user_id: "550e8400-e29b-41d4-a716-446655440202",
      animal_id: "550e8400-e29b-41d4-a716-446655550002",
      assignment_id: "550e8400-e29b-41d4-a716-446655880002",
      logged_at: "2026-01-20T00:00:00.000Z",
      category: "VETERINARY",
      general_notes: "Vaccinations updated. FVRCP booster administered.",
      behavior_notes: null,
      medication_id: "550e8400-e29b-41d4-a716-446655990001",
      qty_administered: 1.0,
      dose: "1ml injection",
      administered_at: "2026-01-20T10:00:00.000Z",
      prescription: null,
      documents: null
    },
    {
      id: "550e8400-e29b-41d4-a716-446655770001",
      foster_user_id: "550e8400-e29b-41d4-a716-446655440202",
      animal_id: "550e8400-e29b-41d4-a716-446655550001",
      assignment_id: "550e8400-e29b-41d4-a716-446655880001",
      logged_at: "2026-01-15T00:00:00.000Z",
      category: "VETERINARY",
      general_notes: "Routine checkup — animal appears healthy. Weight: 62 lbs.",
      behavior_notes: null,
      medication_id: "550e8400-e29b-41d4-a716-446655990001",
      qty_administered: null,
      dose: null,
      administered_at: null,
      prescription: null,
      documents: null
    },
    {
      id: "550e8400-e29b-41d4-a716-446655770002",
      foster_user_id: "550e8400-e29b-41d4-a716-446655440204",
      animal_id: "550e8400-e29b-41d4-a716-446655550001",
      assignment_id: "550e8400-e29b-41d4-a716-446655880001",
      logged_at: "2026-02-01T00:00:00.000Z",
      category: "MEDICAL",
      general_notes: "Administered flea and tick treatment. Next dose due in 30 days.",
      behavior_notes: null,
      medication_id: "550e8400-e29b-41d4-a716-446655990001",
      qty_administered: 1.0,
      dose: "1 tablet",
      administered_at: "2026-02-01T09:00:00.000Z",
      prescription: null,
      documents: null
    }

  ];
};

exports.findById = async (id) => {
  const medicalLogs = await exports.findAll();
  return medicalLogs.find(log => log.id === id);
}
