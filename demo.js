
$(document).ready(function() {

    $('#schedule_btn').click(function(){
    $('#booking_date').toggle();   
     });
 
        let currentDate =new Date();
   
        
        $('#rt_bt').click(function() {
            currentDate.setDate(currentDate.getDate() + 1);
            updateDateDisplay();
          });
        
          $('#lt_bt').click(function() {
            if (!isToday(currentDate)) {
              currentDate.setDate(currentDate.getDate() - 1);
              updateDateDisplay();
            }
          });
        
          $('#calander_bt').click(function() {
            $('#calendar').toggle();
            if ($('#calendar').is(':visible')) {
              $('#calendar').datepicker('show');
            }
          });
        
          $('#calendar').datepicker({
            onSelect: function(dateText, inst) {
              currentDate = new Date(dateText);
              updateDateDisplay();
            }
          });
        
          // Function to format the date as "yyyy-mm-dd"
          function formatDate(date) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
          }
        
          // Function to check if a date is today
          function isToday(date) {
            const today = new Date();
            return (
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear()
            );
          }
        
          // Function to update the date display in the input field
          function updateDateDisplay() {
            let formattedDate = formatDate(currentDate);
            $('#date_display').val(formattedDate);
          }
    });