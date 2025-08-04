const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu("Expirimental Branch")
    .addItem("Show Alert", "showAlert")
    .addToUi();
};

const showAlert = () => {
  const ui = SpreadsheetApp.getUi();
  const result = ui.alert(
    "Please Confirm",
    "Are you sure you want to continue?",
    ui.ButtonSet.YES_NO
  );

  if (result == ui.Button.YES) {
    ui.alert("Confirmation Recieved");
  } else {
    ui.alert("Permission Denied");
  }
};
