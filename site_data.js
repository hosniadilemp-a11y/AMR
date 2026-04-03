window.reportData = {
  "sampleName": "QA5221_S16_L001",
  "summary": {
    "organismCall": "Escherichia coli",
    "mdrStatus": "YES",
    "antibioticClassCount": 6,
    "amrGeneCount": 9,
    "stressGeneCount": 2,
    "rawReadPairs": 1007619,
    "trimmedReadPairs": 987197,
    "readRetentionPct": 97.97,
    "assemblyBp": 5030111,
    "contigCount": 134,
    "largestContigBp": 513612,
    "n50Bp": 294640,
    "gcPct": 50.45,
    "mlstScheme": "ecoli_achtman_4",
    "mlstType": "ST354",
    "plasmidReplicons": 0
  },
  "qc": [
    {
      "label": "Raw R1",
      "file": "QA5221_S16_L001_R1_001.fastq.gz",
      "stage": "raw",
      "perBaseQuality": "PASS",
      "gcContent": "FAIL",
      "adapterContent": "PASS",
      "totalSequences": 1007619,
      "sequenceLength": "35-251"
    },
    {
      "label": "Raw R2",
      "file": "QA5221_S16_L001_R2_001.fastq.gz",
      "stage": "raw",
      "perBaseQuality": "WARN",
      "gcContent": "FAIL",
      "adapterContent": "PASS",
      "totalSequences": 1007619,
      "sequenceLength": "35-251"
    },
    {
      "label": "Trimmed R1",
      "file": "QA5221_S16_L001_trimmed_R1.fastq.gz",
      "stage": "trimmed",
      "perBaseQuality": "PASS",
      "gcContent": "WARN",
      "adapterContent": "PASS",
      "totalSequences": 987197,
      "sequenceLength": "50-251"
    },
    {
      "label": "Trimmed R2",
      "file": "QA5221_S16_L001_trimmed_R2.fastq.gz",
      "stage": "trimmed",
      "perBaseQuality": "PASS",
      "gcContent": "WARN",
      "adapterContent": "PASS",
      "totalSequences": 987197,
      "sequenceLength": "50-251"
    }
  ],
  "amrGenes": [
    {
      "gene": "tet(A)",
      "class": "tetracycline",
      "subclass": "tetracycline",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_30_length_22184_cov_23.784921",
      "start": 2238,
      "stop": 3434,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "aadA2",
      "class": "aminoglycoside",
      "subclass": "streptomycin",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_37_length_9804_cov_25.155627",
      "start": 1988,
      "stop": 2776,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "cmlA1",
      "class": "phenicol",
      "subclass": "chloramphenicol",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_37_length_9804_cov_25.155627",
      "start": 3041,
      "stop": 4297,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "aadA1",
      "class": "aminoglycoside",
      "subclass": "streptomycin",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_37_length_9804_cov_25.155627",
      "start": 4393,
      "stop": 5181,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "qacL",
      "class": "quaternary ammonium",
      "subclass": "quaternary ammonium",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_37_length_9804_cov_25.155627",
      "start": 5354,
      "stop": 5683,
      "strand": "+",
      "role": "STRESS"
    },
    {
      "gene": "sul3",
      "class": "sulfonamide",
      "subclass": "sulfonamide",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_37_length_9804_cov_25.155627",
      "start": 6869,
      "stop": 7657,
      "strand": "-",
      "role": "AMR"
    },
    {
      "gene": "dfrA7",
      "class": "trimethoprim",
      "subclass": "trimethoprim",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_41_length_2175_cov_26.837402",
      "start": 246,
      "stop": 716,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "qacEdelta1",
      "class": "quaternary ammonium",
      "subclass": "quaternary ammonium",
      "method": "ALLELEX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_41_length_2175_cov_26.837402",
      "start": 949,
      "stop": 1293,
      "strand": "+",
      "role": "STRESS"
    },
    {
      "gene": "sul1",
      "class": "sulfonamide",
      "subclass": "sulfonamide",
      "method": "BLASTX",
      "identity": 98.83,
      "coverage": 93.45,
      "contig": "NODE_41_length_2175_cov_26.837402",
      "start": 1290,
      "stop": 2060,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "blaTEM-1",
      "class": "beta-lactam",
      "subclass": "beta-lactam",
      "method": "ALLELEX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_42_length_1823_cov_24.661538",
      "start": 433,
      "stop": 1290,
      "strand": "+",
      "role": "AMR"
    },
    {
      "gene": "aph(3')-Ia",
      "class": "aminoglycoside",
      "subclass": "kanamycin",
      "method": "EXACTX",
      "identity": 100.0,
      "coverage": 100.0,
      "contig": "NODE_46_length_1294_cov_22.902314",
      "start": 215,
      "stop": 1027,
      "strand": "+",
      "role": "AMR"
    }
  ],
  "clusters": [
    {
      "title": "NODE_37 multidrug cassette-like island",
      "contig": "NODE_37_length_9804_cov_25.155627",
      "length": 9804,
      "note": "The aadA2-cmlA1-aadA1-qacL-sul3 block matches a known style of sul3-associated multidrug region. This is important epidemiologically, but it is not evidence of a brand-new resistance cassette.",
      "genes": [
        "aadA2",
        "cmlA1",
        "aadA1",
        "qacL",
        "sul3"
      ]
    },
    {
      "title": "NODE_41 integron-like resistance tail",
      "contig": "NODE_41_length_2175_cov_26.837402",
      "length": 2175,
      "note": "The dfrA7-qacEdelta1-sul1 arrangement is compatible with a class 1 integron-associated structure. Without longer contigs or long reads, it is safer to call this integron-like rather than fully resolved.",
      "genes": [
        "dfrA7",
        "qacEdelta1",
        "sul1"
      ]
    },
    {
      "title": "NODE_42 beta-lactamase unit",
      "contig": "NODE_42_length_1823_cov_24.661538",
      "length": 1823,
      "note": "blaTEM-1 appears on a short contig as a complete known beta-lactamase gene. The exact surrounding mobile context remains unresolved in this assembly.",
      "genes": [
        "blaTEM-1"
      ]
    },
    {
      "title": "NODE_46 aminoglycoside phosphotransferase unit",
      "contig": "NODE_46_length_1294_cov_22.902314",
      "length": 1294,
      "note": "aph(3')-Ia contributes aminoglycoside resistance and appears alone on this short contig fragment.",
      "genes": [
        "aph(3')-Ia"
      ]
    },
    {
      "title": "NODE_30 tetracycline efflux region",
      "contig": "NODE_30_length_22184_cov_23.784921",
      "length": 22184,
      "note": "tet(A) is present as a complete, exact tetracycline efflux determinant on a larger contig, reinforcing the MDR class count.",
      "genes": [
        "tet(A)"
      ]
    }
  ],
  "novelty": {
    "cardsEn": [
      {
        "label": "Novel AMR gene",
        "score": "No",
        "support": 10,
        "text": "The detected genes are established references. Most are exact 100% identity and 100% coverage matches, which argues against a new gene claim."
      },
      {
        "label": "New lineage",
        "score": "No",
        "support": 18,
        "text": "ST354 has already been reported in human, animal, food, and environmental AMR studies. This sample fits a known lineage rather than revealing a new clone."
      },
      {
        "label": "Meaningful science",
        "score": "Yes",
        "support": 76,
        "text": "This is a robust surveillance-grade MDR genome with an interpretable resistome. Its scientific value increases if linked to underreported geography, source metadata, or comparative genomics."
      }
    ],
    "cardsFr": [
      {
        "label": "Nouveau gène AMR",
        "score": "Non",
        "support": 10,
        "text": "Les gènes détectés correspondent à des références déjà connues. Les correspondances exactes dominent, ce qui ne soutient pas l'hypothèse d'un nouveau gène."
      },
      {
        "label": "Nouvelle lignée",
        "score": "Non",
        "support": 18,
        "text": "ST354 est déjà rapporté dans les études AMR humaines, animales et environnementales. Cet isolat s'inscrit dans une lignée connue."
      },
      {
        "label": "Science utile",
        "score": "Oui",
        "support": 76,
        "text": "Ce génome reste très utile pour la surveillance MDR et pour une future génomique comparative si des métadonnées supplémentaires sont ajoutées."
      }
    ],
    "methods": [
      {
        "stage": "known_gene_baseline",
        "title_en": "Known-gene baseline filtering",
        "title_fr": "Filtrage de base des gènes connus",
        "text_en": "AMRFinderPlus plus ABRicate CARD, ResFinder, and VFDB hits were used to mask strong known-gene regions before ranking.",
        "text_fr": "AMRFinderPlus ainsi que les bases CARD, ResFinder et VFDB d'ABRicate ont servi à masquer les régions correspondant à des gènes connus avant le classement.",
        "tools": "AMRFinderPlus, ABRicate",
        "databases": "AMRFinderPlus, CARD, ResFinder, VFDB"
      },
      {
        "stage": "gene_prediction",
        "title_en": "Gene prediction and annotation",
        "title_fr": "Prédiction et annotation des gènes",
        "text_en": "Prokka predicted CDS features across the assembly, and all ORFs were retained as the v1 candidate universe.",
        "text_fr": "Prokka a prédit les CDS sur l'assemblage et tous les ORF ont été conservés comme univers de candidats pour la v1.",
        "tools": "Prokka",
        "databases": "Prokka bundled annotation resources"
      },
      {
        "stage": "homology_screen",
        "title_en": "Swiss-Prot homology screen",
        "title_fr": "Criblage d'homologie Swiss-Prot",
        "text_en": "Candidate proteins were compared against a local Swiss-Prot BLAST database to capture best-hit identity, coverage, and description.",
        "text_fr": "Les protéines candidates ont été comparées à une base BLAST Swiss-Prot locale pour récupérer la meilleure identité, la couverture et la description.",
        "tools": "BLASTP",
        "databases": "Swiss-Prot"
      },
      {
        "stage": "domain_inference",
        "title_en": "Domain inference",
        "title_fr": "Inférence des domaines",
        "text_en": "Pfam-A domain calls were gathered with HMMER to identify known domain architectures and DUF-only candidates.",
        "text_fr": "Les domaines Pfam-A ont été recherchés avec HMMER afin d'identifier les architectures connues et les candidats limités à des DUF.",
        "tools": "hmmscan",
        "databases": "Pfam-A"
      },
      {
        "stage": "read_validation",
        "title_en": "Read-depth validation",
        "title_fr": "Validation par profondeur de lecture",
        "text_en": "Trimmed reads were remapped to the assembly to estimate candidate-region depth consistency and flag low-support artifacts.",
        "text_fr": "Les lectures trimées ont été remappées sur l'assemblage afin d'estimer la cohérence de profondeur et de signaler les artefacts faiblement soutenus.",
        "tools": "BWA, samtools",
        "databases": "Assembly-derived alignment index"
      },
      {
        "stage": "phylogeny",
        "title_en": "Targeted phylogeny",
        "title_fr": "Phylogénie ciblée",
        "text_en": "Top-ranked candidates can be aligned with Swiss-Prot homologs and summarized with FastTree when enough homologs are available.",
        "text_fr": "Les meilleurs candidats peuvent être alignés avec des homologues Swiss-Prot puis résumés avec FastTree lorsqu'un nombre suffisant d'homologues est disponible.",
        "tools": "MAFFT, FastTree",
        "databases": "Swiss-Prot subset"
      }
    ],
    "stageStatus": [
      {
        "stageName": "known_gene_baseline",
        "status": "NOT RUN",
        "detailEn": "Novelty workflow outputs were not generated for this QA5221 report yet.",
        "detailFr": "Les sorties du workflow de nouveauté n'ont pas encore été générées pour ce rapport QA5221."
      },
      {
        "stageName": "gene_prediction",
        "status": "NOT RUN",
        "detailEn": "Novelty workflow outputs were not generated for this QA5221 report yet.",
        "detailFr": "Les sorties du workflow de nouveauté n'ont pas encore été générées pour ce rapport QA5221."
      },
      {
        "stageName": "homology_screen",
        "status": "NOT RUN",
        "detailEn": "Novelty workflow outputs were not generated for this QA5221 report yet.",
        "detailFr": "Les sorties du workflow de nouveauté n'ont pas encore été générées pour ce rapport QA5221."
      },
      {
        "stageName": "domain_inference",
        "status": "NOT RUN",
        "detailEn": "Novelty workflow outputs were not generated for this QA5221 report yet.",
        "detailFr": "Les sorties du workflow de nouveauté n'ont pas encore été générées pour ce rapport QA5221."
      },
      {
        "stageName": "read_validation",
        "status": "NOT RUN",
        "detailEn": "Novelty workflow outputs were not generated for this QA5221 report yet.",
        "detailFr": "Les sorties du workflow de nouveauté n'ont pas encore été générées pour ce rapport QA5221."
      },
      {
        "stageName": "phylogeny",
        "status": "NOT RUN",
        "detailEn": "Novelty workflow outputs were not generated for this QA5221 report yet.",
        "detailFr": "Les sorties du workflow de nouveauté n'ont pas encore été générées pour ce rapport QA5221."
      }
    ],
    "candidates": [],
    "conclusionEn": "This report has been updated to support structured novelty outputs, but the QA5221 website bundle in this workspace does not yet include a completed novelty-screen run. The current interpretation remains that the sample supports a strong known MDR configuration rather than a validated novel AMR gene claim.",
    "conclusionFr": "Ce rapport a été mis à jour pour prendre en charge des sorties de nouveauté structurées, mais la livraison QA5221 présente dans cet espace de travail ne contient pas encore un run complet du novelty-screen. L'interprétation actuelle reste donc celle d'une configuration MDR connue et solide, sans revendication validée de nouveau gène AMR."
  }
};
