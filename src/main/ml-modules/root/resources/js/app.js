function createRuleBase () {
    var x = document.getElementById("myTable").rows.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow(x);
    var cell3 = row.insertCell(0);
    x=x+1
    cell3.innerHTML = '<input type="text" class="form-control input-sm" size="30" name="rulebase"  value=""/>';
    x = document.getElementById("myTable").rows.length;
    document.getElementById("filterCount").value = (x + 1);
}

function deleteRuleBase() {
    var x = document.getElementById("myTable").rows.length;
    if (x != 0) {
        var offset = (x - 1);
        document.getElementById("myTable").deleteRow(offset);
        x = document.getElementById("myTable").rows.length;
        document.getElementById("filterCount").value = (x - 1);
    }
}
