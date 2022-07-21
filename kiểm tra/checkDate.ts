function ValidateDate(dtValue: any) {
    var dtRegex = new RegExp(/bd{1,2}[/-]d{1,2}[/-]d{4}b/);
    return dtRegex.test(dtValue);
}