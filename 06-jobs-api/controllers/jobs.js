///////////////get all jobs
const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

/////// get a single job
const getJob = async (req, res) => {
  res.send("get job");
};

//// create a job
const createJob = async (req, res) => {
  res.json(req.user);
};

/// update a job
const updateJob = async (req, res) => {
  res.send("update job");
};
/// delete a job
const deleteJob = async (req, res) => {
  res.send("delete job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
