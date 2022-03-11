<script type="text/javascript">
    i = 0;
    dt = new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
    function next_cl() {
    i++;
    document.getElementById("text_cl").style.color = dt[i];
    if (i>dt.length) i = 0;
    setTimeout("next_cl()", 700);
}
    next_cl();
</script>