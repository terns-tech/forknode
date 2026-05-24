Yash Pawar
+91-9765539959 • yash.pawar@terns.tech
linkedin.com/in/Yash-Pawar | github.com/Ypp6657
Summary
AI & HPC Engineer at C-DAC, working on large-scale AI infrastructure for India’s National PARAM Supercomputing Facility
(NPSF). Specializing in LLM systems and distributed GPU computing, with hands-on experience in building RAG pipelines,
fine-tuning LLaMA 3 models, benchmarking LLaMA and GPT-OSS models using MLPerf, and running multi-node workloads on
A100/H200 clusters using PyTorch DDP/FSDP, Horovod, and SLURM. Recognized by MeitY for contributions to the IndiaAI
Impact Summit 2026.
Technical Skills
LLM Systems: LLaMA 3 (8B/70B), GPT-OSS 20B MoE, vLLM, Tensor Parallelism, KV Cache Optimization, Long-Context
Inference (128K tokens)
HPC & Distributed: SLURM, PyTorch DDP/FSDP, Horovod, NCCL, NVLink, InfiniBand, NSight Systems, DCGM
MoE & Scaling: Top-1/Top-2 Expert Routing, Load Balancing, All-to-All Communication, Sparse vs. Dense Scaling Laws
Benchmarking: MLPerf-style Evaluation, PRIMUS, NVIDIA NeMo, Throughput/Latency Profiling, GPU Utilization Analysis
Tech Stack: Python, PyTorch, LangChain, LangGraph, HuggingFace Transformers, Accelerate, FAISS, SentenceTransformers,
Docker, Linux, Git
Experience
CDAC (National PARAM Supercomputing Facility) Project Engineer – AI & HPC Pune, India
Mar 2025–Present
○ Designed a RAG-based LLM chatbot on NPSF HPC infrastructure using LLaMA 3 (8B), FAISS, and SentenceTransformers; the system
serves live researcher queries related to SLURM workflows, CUDA errors, and cluster operations.
○ Benchmarked LLaMA 3 and GPT-OSS MoE (20B) models on NVIDIA A100 & H200 GPUs using Docker, PRIMUS, and NVIDIA NeMo
frameworks, systematically evaluating tokens/sec throughput and memory efficiency across different batch sizes and context lengths.
○ Led LLaMA 3 70B deployment experiments covering tensor parallelism configurations, memory-efficient attention mechanisms, and KV
cache scaling strategies for long-context (128K) workloads.
Projects
CDAC / NPSF
LLM Benchmarking & Mixture-of-Experts Analysis on HPC 2025
○ Designed a systematic benchmarking framework comparing GPT-OSS MoE (20B) and LLaMA 3 dense models under fixed GPU memory
budgets on A100 and H200 clusters using PRIMUS, Docker, and NVIDIA NeMo as inference backends.
○ Quantified that All-to-All expert communication accounts for 40–50% of total MoE runtime, providing concrete data to guide routing
and scheduling optimizations.
○ Produced a comparative scaling report used internally to inform future cluster hardware investment decisions.
CDAC
Research-Oriented RAG Pipeline for HPC Documentation 2024–2025
○ Developed a research-focused Retrieval-Augmented Generation (RAG) workflow for HPC support documentation using LangChain,
semantic chunking, FAISS vector indexing, and open-source LLMs including LLaMA 3 and Gemma.
○ Processed and organized AIRAWAT/NPSF documentation datasets by extracting text from PDFs, generating semantic chunks using
RecursiveCharacterTextSplitter, and preparing structured retrieval datasets for experimentation.
○ Built and evaluated local embedding and retrieval pipelines using FAISS indexes and embedding models such as BGE and Qwen for
HPC-related query retrieval tasks.
Achievements & Recognition
MeitY Recognition: Received a Letter of Appreciation from the Ministry of Electronics & Information Technology (MeitY),
Government of India, for contributions to the IndiaAI Impact Summit 2026
Education
CDAC Pune, India
Post-Graduate Diploma in AI & Data Analytics, 88.2% 2024–2025
Coursework: Statistics, Big Data Analytics, Advanced Machine Learning, Deep Learning, NLP, DevOps
Zeal College of Engineering and Research (Savitribai Phule Pune University) B.E. in Artificial Intelligence & Data Science, CGPA: 9.69 / 10 Pune, India
2020–2024