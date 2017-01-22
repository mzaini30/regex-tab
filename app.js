$input = $(".input")
$output = $(".output")
$proses = $(".proses")

$proses.click(function(){
    $output.val($input.val().replace(/\040{2}/g, "\t"))
})