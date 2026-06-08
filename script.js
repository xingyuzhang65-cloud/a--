const rows = [
  {
    id: 50034,
    bill: ["USSZ202606050034", "20260605022", "FBAIOWRW30WS"],
    track: "预计送达时间1",
    time: "2026-07-11 00:00:00",
    outbound: "",
    group: "USSZ202606050034",
    customer: "塘厦测试客户",
    type: "直营",
    service: "纽约直航38日达-卡派BS",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 257.04,
    chargeWeight: 257.04,
    warehouse: "LGB8",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50029,
    bill: ["USSZ202606050029", "20260605019", "FBAIOWRW22WS"],
    track: "预计送达时间3",
    time: "2026-06-23 16:13:25",
    outbound: "CH000006049",
    group: "USSZ202606050029",
    customer: "塘厦测试客户",
    type: "直营",
    service: "纽约普船专线-卡派BS",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 25.72,
    chargeWeight: 36,
    warehouse: "TEB9",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50026,
    bill: ["USSZ202606050026", "20260605016", "FBAIOWRW15WS"],
    track: "预计送达时间1",
    time: "2026-07-02 00:00:00",
    outbound: "",
    group: "USSZ202606050026",
    customer: "塘厦测试客户",
    type: "直营",
    service: "合德17日达-卡派BS",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 25.72,
    chargeWeight: 36,
    warehouse: "ONT8",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50027,
    bill: ["USSZ202606050027", "20260605017", "FBAIOWRW11WS"],
    track: "预计送达时间1",
    time: "2026-07-02 00:00:00",
    outbound: "",
    group: "USSZ202606050027",
    customer: "塘厦测试客户",
    type: "直营",
    service: "合德17日达-卡派BS",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 25.72,
    chargeWeight: 36,
    warehouse: "ONT8",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50028,
    bill: ["USSZ202606050028", "20260605018", "FBAIOWRW12WS"],
    track: "预计送达时间1",
    time: "2026-07-02 00:00:00",
    outbound: "",
    group: "USSZ202606050028",
    customer: "塘厦测试客户",
    type: "直营",
    service: "合德17日达-卡派BS",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 25.72,
    chargeWeight: 36,
    warehouse: "ONT8",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50024,
    bill: ["USSZ202606050024", "20260605015", "FBAIOW7W15WS,FBAIOW..."],
    track: "预计送达时间1",
    time: "2026-07-02 00:00:00",
    outbound: "CH000006045",
    group: "USSZ202606050024",
    customer: "塘厦测试客户",
    type: "直营",
    service: "合德17日达-卡派BS",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 25.72,
    chargeWeight: 36,
    warehouse: "ONT8",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50021,
    bill: ["USSZ202606050021", "20260605013", "FBAIOW6W13WS"],
    track: "已拣货",
    time: "2026-06-05 14:29:08",
    outbound: "CH000006045",
    group: "USSZ202606050021",
    customer: "塘厦测试客户",
    type: "直营",
    service: "美森15日达-UPS派包税",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 36,
    volume: 25.72,
    chargeWeight: 36,
    warehouse: "ABE2",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50020,
    bill: ["USSZ202606050020", "20260605012", "FBAIOW5W13WS"],
    track: "预计送达时间1",
    time: "2026-06-02 00:00:00",
    outbound: "CH000006045",
    group: "USSZ202606050020",
    customer: "塘厦测试客户",
    type: "直营",
    service: "星空派普货-ORD/JFK五日提UPS派",
    country: "美国",
    pieces: 2,
    value: 260,
    currency: "USD",
    actual: 0,
    volume: 0,
    chargeWeight: 0,
    warehouse: "ABE2",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已收货",
    highlight: true,
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50018,
    bill: ["USSZ202606050018", "20260605010", "FBAIOW8W10WS"],
    track: "待确认材积",
    time: "2026-06-04 09:30:00",
    outbound: "CH000006041",
    group: "USSZ202606050018",
    customer: "华东演示客户",
    type: "代理",
    service: "英国空派专线-UPS派",
    country: "英国",
    pieces: 5,
    value: 480,
    currency: "GBP",
    actual: 72,
    volume: 60.5,
    chargeWeight: 72,
    warehouse: "BHX4",
    declare: "待上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "已下单",
    surcharge: "原:1942.00, 现1894.00"
  },
  {
    id: 50017,
    bill: ["USSZ202606050017", "20260605009", "FBAIOW8W09WS"],
    track: "转运中",
    time: "2026-06-05 08:12:45",
    outbound: "CH000006040",
    group: "USSZ202606050017",
    customer: "塘厦测试客户",
    type: "直营",
    service: "美西快船-卡派",
    country: "美国",
    pieces: 3,
    value: 320,
    currency: "USD",
    actual: 42,
    volume: 39.8,
    chargeWeight: 42,
    warehouse: "LAX9",
    declare: "已上传",
    attachment: "运输信息模板.xls",
    insured: "否",
    status: "转运中",
    surcharge: "原:1942.00, 现1894.00"
  }
];

const state = {
  status: "已收货",
  page: 1,
  pageSize: 10,
  selected: new Set()
};

const tableBody = document.querySelector("#tableBody");
const statusTabs = document.querySelector("#statusTabs");
const selectionBar = document.querySelector("#selectionBar");
const selectedCount = document.querySelector("#selectedCount");
const selectAll = document.querySelector("#selectAll");
const totalText = document.querySelector("#totalText");
const pageButtons = document.querySelector("#pageButtons");
const jumpPage = document.querySelector("#jumpPage");
const toast = document.querySelector("#toast");
const dialog = document.querySelector("#infoDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogBody = document.querySelector("#dialogBody");
const dialogFooter = document.querySelector("#dialogFooter");

function getFilters() {
  return {
    keyword: document.querySelector("#keywordInput").value.trim().toLowerCase(),
    customer: document.querySelector("#customerInput").value.trim(),
    owner: document.querySelector("#ownerInput").value.trim(),
    country: document.querySelector("#countryInput").value,
    warehouse: document.querySelector("#warehouseInput").value.trim().toUpperCase(),
    declare: document.querySelector("#declareInput").value
  };
}

function filteredRows() {
  const filters = getFilters();
  return rows.filter((row) => {
    const flat = [
      ...row.bill,
      row.group,
      row.outbound,
      row.customer,
      row.service,
      row.warehouse,
      row.declare
    ]
      .join(" ")
      .toLowerCase();
    const statusMatch = state.status === "全部" || row.status === state.status;
    const keywordMatch = !filters.keyword || flat.includes(filters.keyword);
    const customerMatch = !filters.customer || row.customer.includes(filters.customer);
    const ownerMatch = !filters.owner || "跟单代表".includes(filters.owner);
    const countryMatch = !filters.country || row.country === filters.country;
    const warehouseMatch = !filters.warehouse || row.warehouse.includes(filters.warehouse);
    const declareMatch = !filters.declare || row.declare === filters.declare;
    return (
      statusMatch &&
      keywordMatch &&
      customerMatch &&
      ownerMatch &&
      countryMatch &&
      warehouseMatch &&
      declareMatch
    );
  });
}

function renderTable() {
  const data = filteredRows();
  const start = (state.page - 1) * state.pageSize;
  const pageRows = data.slice(start, start + state.pageSize);

  tableBody.innerHTML = pageRows
    .map(
      (row) => `
        <tr class="${row.highlight ? "highlight" : ""} ${state.selected.has(row.id) ? "selected" : ""}">
          <td class="check"><input type="checkbox" data-id="${row.id}" ${state.selected.has(row.id) ? "checked" : ""}></td>
          <td><div class="waybill">${row.bill.map((part) => `<span>${part}</span>`).join("")}</div></td>
          <td>${row.track}</td>
          <td>${row.time}</td>
          <td>${row.outbound}</td>
          <td>${row.surcharge || ""}</td>
          <td>${row.group}</td>
          <td>${row.customer}</td>
          <td>${row.type}</td>
          <td>${row.service}</td>
          <td>${row.country}</td>
          <td>${row.pieces}</td>
          <td>${row.value}</td>
          <td>${row.currency}</td>
          <td>${row.actual}</td>
          <td>${row.volume}</td>
          <td>${row.chargeWeight}</td>
          <td>${row.warehouse}</td>
          <td>${row.declare}</td>
          <td><a class="file-link" href="#" data-action="下载附件">${row.attachment}</a></td>
          <td>${row.insured}</td>
        </tr>
      `
    )
    .join("");

  const pageIds = pageRows.map((row) => row.id);
  selectAll.checked = pageIds.length > 0 && pageIds.every((id) => state.selected.has(id));
  selectAll.indeterminate = pageIds.some((id) => state.selected.has(id)) && !selectAll.checked;
  renderPagination(data.length);
  renderSelection();
}

function renderPagination(total) {
  const pages = Math.max(1, Math.ceil(total / state.pageSize));
  if (state.page > pages) state.page = pages;
  totalText.textContent = `共 ${state.status === "已收货" && total === 8 ? 874 : total} 条`;
  jumpPage.value = state.page;
  pageButtons.innerHTML = "";

  const visible = [];
  for (let i = 1; i <= Math.min(6, pages); i += 1) visible.push(i);
  if (pages > 7) visible.push("...", pages);

  visible.forEach((page) => {
    const button = document.createElement("button");
    button.textContent = page;
    if (page === state.page) button.classList.add("active");
    if (page === "...") {
      button.disabled = true;
    } else {
      button.addEventListener("click", () => {
        state.page = page;
        renderTable();
      });
    }
    pageButtons.append(button);
  });
}

function renderSelection() {
  selectedCount.textContent = state.selected.size;
  selectionBar.classList.toggle("show", state.selected.size > 0);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function showDialog(title, html, footerHtml = `<button class="primary" value="close">确定</button>`, variant = "") {
  dialogTitle.textContent = title;
  dialogBody.innerHTML = html;
  dialogFooter.innerHTML = footerHtml;
  dialog.className = variant;
  dialog.showModal();
}

function runAction(label) {
  const count = state.selected.size;
  showToast(count ? `${label}：已处理 ${count} 条选中运单` : `${label}：请先选择运单`);
}

function openChargeWeightDialog() {
  showDialog(
    "批量申请收费重",
    `<div class="import-form">
      <div class="form-row">
        <span class="required">*</span>
        <label>上传文件：</label>
        <input id="chargeWeightFile" type="file" accept=".xls,.xlsx,.csv" hidden>
        <button class="upload-btn" id="selectChargeWeightFile" type="button">上传</button>
        <span class="file-name" id="chargeWeightFileName"></span>
      </div>
      <div class="form-row template-row">
        <span></span>
        <label>模板下载：</label>
        <a href="#" id="downloadChargeWeightTpl">下载导入模板</a>
      </div>
    </div>`,
    `<button class="primary" id="confirmChargeWeightImport" type="button">确 定</button>
     <button class="ghost" value="close">取 消</button>`,
    "import-dialog"
  );
}

function applyChargeWeightImport() {
  const input = document.querySelector("#chargeWeightFile");
  if (!input?.files?.length) {
    showToast("请先上传文件");
    return;
  }
  const targetIds =
    state.selected.size > 0 ? state.selected : new Set(filteredRows().map((row) => row.id));
  rows.forEach((row) => {
    if (targetIds.has(row.id)) {
      row.chargeWeight = Math.max(row.actual, row.volume);
    }
  });
  dialog.close();
  renderTable();
  showToast(`已导入 ${targetIds.size} 条运单收费重明细`);
}

async function downloadChargeWeightTemplate() {
  const ExcelJS = window.ExcelJS;
  if (!ExcelJS) {
    showToast("ExcelJS 加载中，请稍后再试");
    return;
  }

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("收费重模板");

  ws.columns = [
    { header: "运单号", key: "waybill", width: 22 },
    { header: "原收费重", key: "origin", width: 14 },
    { header: "申请收费重", key: "target", width: 14 },
  ];

  const headerRow = ws.getRow(1);
  headerRow.height = 24;
  headerRow.font = { name: "微软雅黑", size: 11, bold: true };
  headerRow.alignment = { vertical: "middle", horizontal: "center" };

  const requiredCols = [1, 2, 3];
  requiredCols.forEach((col) => {
    const cell = headerRow.getCell(col);
    cell.value = { richText: [{ font: { color: { argb: "FFFF0000" }, name: "微软雅黑", size: 11, bold: true }, text: "*" }, { font: { name: "微软雅黑", size: 11, bold: true }, text: String(cell.value) }] };
  });

  const row2 = ws.addRow(["USSZ202606050034", "257.04", "257.04"]);
  row2.font = { name: "微软雅黑", size: 11 };
  row2.alignment = { vertical: "middle", horizontal: "center" };

  ws.eachRow((row) => {
    row.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
  });

  const buf = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "批量申请收费重.xlsx";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("已下载导入模板");
}

statusTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  state.status = button.dataset.status;
  state.page = 1;
  statusTabs.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderTable();
});

document.querySelector("#searchBtn").addEventListener("click", () => {
  state.page = 1;
  renderTable();
  showToast("查询完成");
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  document.querySelectorAll(".filters input").forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll(".filters select").forEach((select) => {
    select.selectedIndex = 0;
  });
  state.page = 1;
  renderTable();
  showToast("已重置查询条件");
});

document.querySelector("#expandBtn").addEventListener("click", (event) => {
  document.querySelector(".filters").classList.toggle("expanded");
  event.currentTarget.textContent = document.querySelector(".filters").classList.contains("expanded")
    ? "⌃ 收起"
    : "⌄ 展开";
});

document.addEventListener("click", (event) => {
  const menuButton = event.target.closest("[data-menu]");
  document.querySelectorAll(".menu.open").forEach((menu) => {
    if (!menuButton || menu.id !== menuButton.dataset.menu) menu.classList.remove("open");
  });
  if (menuButton) {
    document.querySelector(`#${menuButton.dataset.menu}`).classList.toggle("open");
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    event.preventDefault();
    document.querySelectorAll(".menu.open").forEach((menu) => menu.classList.remove("open"));
    runAction(actionTarget.dataset.action);
  }
});

document.querySelector("#batchChargeWeightBtn").addEventListener("click", () => {
  document.querySelectorAll(".menu.open").forEach((menu) => menu.classList.remove("open"));
  openChargeWeightDialog();
});

dialogBody.addEventListener("click", (event) => {
  const uploadButton = event.target.closest("#selectChargeWeightFile");
  if (uploadButton) {
    document.querySelector("#chargeWeightFile")?.click();
    return;
  }

  const templateLink = event.target.closest("#downloadChargeWeightTpl");
  if (templateLink) {
    event.preventDefault();
    downloadChargeWeightTemplate();
  }
});

dialogBody.addEventListener("change", (event) => {
  const input = event.target.closest("#chargeWeightFile");
  if (!input) return;
  document.querySelector("#chargeWeightFileName").textContent = input.files[0]?.name || "";
});

dialogFooter.addEventListener("click", (event) => {
  const button = event.target.closest("#confirmChargeWeightImport");
  if (!button) return;
  applyChargeWeightImport();
});

tableBody.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox'][data-id]");
  if (!checkbox) return;
  const id = Number(checkbox.dataset.id);
  if (checkbox.checked) state.selected.add(id);
  else state.selected.delete(id);
  renderTable();
});

tableBody.addEventListener("dblclick", (event) => {
  const row = event.target.closest("tr");
  if (!row) return;
  const id = Number(row.querySelector("[data-id]").dataset.id);
  const item = rows.find((entry) => entry.id === id);
  showDialog(
    "运单详情",
    `<p><strong>运单号：</strong>${item.bill[0]}</p>
     <p><strong>服务：</strong>${item.service}</p>
     <p><strong>最新运踪：</strong>${item.track}，${item.time}</p>
     <p><strong>收费重：</strong>${item.chargeWeight}</p>
     <p><strong>客户：</strong>${item.customer}，仓库 ${item.warehouse}</p>`
  );
});

selectAll.addEventListener("change", () => {
  const pageRows = filteredRows().slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
  pageRows.forEach((row) => {
    if (selectAll.checked) state.selected.add(row.id);
    else state.selected.delete(row.id);
  });
  renderTable();
});

document.querySelector("#clearSelection").addEventListener("click", () => {
  state.selected.clear();
  renderTable();
});

document.querySelector("#pageSize").addEventListener("change", (event) => {
  state.pageSize = Number(event.target.value);
  state.page = 1;
  renderTable();
});

document.querySelector("#prevPage").addEventListener("click", () => {
  state.page = Math.max(1, state.page - 1);
  renderTable();
});

document.querySelector("#nextPage").addEventListener("click", () => {
  const pages = Math.max(1, Math.ceil(filteredRows().length / state.pageSize));
  state.page = Math.min(pages, state.page + 1);
  renderTable();
});

jumpPage.addEventListener("change", () => {
  const pages = Math.max(1, Math.ceil(filteredRows().length / state.pageSize));
  state.page = Math.min(pages, Math.max(1, Number(jumpPage.value) || 1));
  renderTable();
});

document.querySelector("#statsBtn").addEventListener("click", () => {
  const data = filteredRows();
  const pieces = data.reduce((sum, row) => sum + row.pieces, 0);
  const weight = data.reduce((sum, row) => sum + row.actual, 0);
  showDialog(
    "查看统计",
    `<div class="stat-grid">
      <div><strong>${data.length}</strong><span>当前列表</span></div>
      <div><strong>${pieces}</strong><span>总件数</span></div>
      <div><strong>${weight}</strong><span>实重合计</span></div>
    </div>`
  );
});

document.querySelector("#logBtn").addEventListener("click", () => {
  showDialog(
    "查看日志",
    `<p>2026-06-05 14:29:08  运单 USSZ202606050021 已拣货</p>
     <p>2026-06-05 09:18:36  系统同步 FBA 入仓信息</p>
     <p>2026-06-04 17:42:21  操作员更新申报附件</p>`
  );
});

[
  ["#exportBtn", "导出"],
  ["#printMergeBtn", "打印入仓单"],
  ["#syncBtn", "同步FBA"],
  ["#mismatchBtn", "进入不匹配待处理"],
  ["#quickOrderBtn", "快捷下单"],
  ["#excelOrderBtn", "Excel导入下单"],
  ["#parseOrderBtn", "解析发票下单"],
  ["#columnBtn", "列设置"]
].forEach(([selector, label]) => {
  document.querySelector(selector).addEventListener("click", () => runAction(label));
});

document.querySelectorAll(".nav-group, .nav-sub, .doc-tab, .rail-item").forEach((button) => {
  button.addEventListener("click", () => showToast(`${button.textContent.trim().replace("×", "")}`));
});

renderTable();
