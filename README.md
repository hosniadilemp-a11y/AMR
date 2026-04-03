# QA5221 AMR/MDR Analysis Results

This directory contains the results of an Antimicrobial Resistance (AMR) and Multidrug Resistance (MDR) analysis for sample **QA5221_S16_L001**.

## Directory Structure

- **site/**: The interactive HTML report portal. Open `site/index.html` to view the full analysis.
- **reports/**: Raw summary files and plots.
  - `*_summary.html`: The original pipeline summary report.
  - `*_sample_summary.csv`: Core metrics in CSV format.
  - `*_amr_genes.csv`: List of detected AMR genes.
  - `*.png`: Visualizations of read counts, AMR classes, and identity/coverage.
- **qc/**: Quality control reports from FastQC.
  - `raw/`: FastQC results for raw reads.
  - `trimmed/`: FastQC results after adapter trimming.
- **amr/**: Raw output from AMR analysis tools.
  - `*_amrfinder.tsv`: AMRFinderPlus results.
  - `*_mlst.tsv`: MLST typing results.
- **assembly/**: Genome assembly files.
  - `contigs.fasta`: Final assembled contigs.
- **run_manifest.json**: A machine-readable manifest of the entire pipeline run.

## How to use these results

1. **View the report**: Open [site/index.html](site/index.html) in any modern web browser.
2. **Download data**: Use the buttons in the web report to download CSV or FASTA files for further analysis.
3. **Reproduce**: The `run_manifest.json` file contains all parameters and commands used to generate these results.

## Technical Details

- **Sample**: QA5221_S16_L001 (Paired-end)
- **Organism**: Escherichia coli
- **MDR Status**: YES (6 classes detected)
- **Assembly Size**: 5.03 Mb
- **N50**: 294,640 bp

For more information, see the "Methods" section in the interactive report.
