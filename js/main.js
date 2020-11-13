//check display myform
var check_form = 0;
//show chat box

DATA_ARRAY = [{"user_message":"toi can giup do","bot_message":"xin chao"},
{"user_message":"toi muon mua dt","bot_message":"ban can giup gi"},
{"user_message":"oke","bot_message":"vang vui long doi trong giay lat"},
{"user_message":"oke","bot_message":"day la san pham cua chung toi "}]
function show_chatbox(){

    var myForm = document.getElementById(NAME_ID_myForm);
    //create card
    // create class card
    const newDiv_card  = create_div(NAME_CLASS_card);
    const newDiv_card_header = create_card_header();
    const newDiv_card_body = create_card_body(DATA_ARRAY);
    const newDiv_card_footer = create_card_footer();
    newDiv_card.appendChild(newDiv_card_header);
    newDiv_card.appendChild(newDiv_card_body);
    newDiv_card.appendChild(newDiv_card_footer);
    //create class col-md-8 col-xl-6 chat
    const newDiv_col_md_8 = create_div(NAME_CLASS_col_md_8);
    newDiv_col_md_8.appendChild(newDiv_card);
    //create class 
    const newDiv_row_justify_content_center = create_div(NAME_CLASS_row_justify_content_center);
    newDiv_row_justify_content_center.appendChild(newDiv_col_md_8);

    myForm.appendChild(newDiv_row_justify_content_center);

    if(check_form ==0){
        myForm.style.display = "block";
        check_form = 1;
    }
    else{
        myForm.style.display = "none";
        check_form = 0;
    } 
    
}