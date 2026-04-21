const searchData = {
  emperor: [
    "42 catalogue entries located",
    "Imperial decrees, portrait inventories, lineage charts",
    "Court correspondence and ceremonial records cross-indexed"
  ],
  dynasty: [
    "31 catalogue entries located",
    "Succession charts, military campaigns, reform edicts",
    "Restoration narratives prioritized in featured archives"
  ],
  war: [
    "57 catalogue entries located",
    "Maps, victory bulletins, general staff reports",
    "Casualty totals available; rank-and-file names incomplete"
  ],
  worker: [
    "Few catalogued results found",
    "3 fragmentary references in payroll and census records",
    "No personal files survive in the central archive"
  ],
  porter: [
    "Few catalogued results found",
    "2 logistics references found in construction tallies",
    "Recorded as quantity, not as individuals"
  ],
  maid: [
    "Few catalogued results found",
    "1 domestic labor notation found in household expenditure sheets",
    "No correspondence deemed preservable"
  ],
  peasant: [
    "Few catalogued results found",
    "Agricultural quotas available, names absent",
    "Oral histories not preserved in official transfer"
  ]
};

document.querySelectorAll("[data-archive-search]").forEach((form) => {
  const input = form.querySelector("input");
  const output = form.querySelector("[data-search-output]");
  const results = form.querySelector("[data-search-results]");

  const renderResult = (query) => {
    const key = query.trim().toLowerCase();
    const match = searchData[key];

    if (!key) {
      output.innerHTML = "<strong>Search the catalogue</strong><span>Terms like <em>emperor</em> retrieve dense records. Terms like <em>worker</em> return the archive's silence.</span>";
      results.innerHTML = "";
      return;
    }

    if (match) {
      output.innerHTML = `<strong>${match[0]}</strong><span>Query: ${key}</span>`;
      results.innerHTML = match
        .slice(1)
        .map((line) => `<div>${line}</div>`)
        .join("");
      return;
    }

    output.innerHTML = `<strong>No indexed record found</strong><span>Query: ${key}</span>`;
    results.innerHTML = "<div>The absence may reflect archival bias rather than historical absence.</div>";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResult(input.value);
  });

  form.querySelectorAll("[data-fill]").forEach((tag) => {
    tag.addEventListener("click", () => {
      input.value = tag.dataset.fill;
      renderResult(tag.dataset.fill);
    });
  });
});
