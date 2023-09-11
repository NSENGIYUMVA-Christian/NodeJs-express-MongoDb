const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
///////////////get all jobs
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  // send to front end
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

/////// get a single job
const getJob = async (req, res) => {
  res.send("get job");
};

//// create a job
const createJob = async (req, res) => {
  // added createBy property to req.body
  req.body.createdBy = req.user.userId;
  // create a new job
  const job = await Job.create(req.body);
  //send
  res.status(StatusCodes.CREATED).json({ job });
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
