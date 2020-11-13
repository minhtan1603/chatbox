
// createElement with classname
function create_div(classname){
    var newDiv = document.createElement("div"); 
    newDiv.setAttribute("class",classname);
    return newDiv;
}

// createElement with img
function create_img(classname,src){
    var newImg = document.createElement("img");
    newImg.setAttribute("class",classname);
    newImg.setAttribute("src",src);
    return newImg
}
// createElement with span
function create_span(classname,text){
    var newSpan = document.createElement("span");
    newSpan.setAttribute("class",classname);
    newSpan.innerHTML = text;
    return newSpan;
}
//createElement with p
function create_p(classname,text){
    var newP = document.createElement("p");
    newP.setAttribute("class",classname);
    newP.innerHTML = text;
    return newP;
}
//createElement with textarea
function create_textarea(classname,your_message){
    var newTextarea = document.createElement("textarea");
    newTextarea.setAttribute("class",classname)
    newTextarea.setAttribute("placeholder",your_message);
    return newTextarea
}

//create class card-header msg_head
function create_card_header(){
    //create and append elements of class img_cont
    const newDiv_img_cont = create_div(NAME_DIV_img_cont);
    const newIMG_bot = create_img(NAME_CLASS_IMG,PATH_BOT_IMG);
    const newSpan_bot_img = create_span(NAME_CLASS_SPAN,SPAN_VALUE);
    newDiv_img_cont.appendChild(newIMG_bot);
    newDiv_img_cont.appendChild(newSpan_bot_img);
    //create append element of class user info
    const newDiv_user_info = create_div(NAME_CLASS_USER_INFO);
    const newSpan_user_info = create_span(SPAN_VALUE,SPAN_VALUE_USER_INFO);
    const newP_user_info = create_p(NAME_p_user_info,VALUE_p_user_info);
    newDiv_user_info.appendChild(newSpan_user_info);
    newDiv_user_info.appendChild(newP_user_info);
    //append class img_bot and user_info to class d-flex bd-highlight
    const newDiv_d_flex = create_div(NAME_D_FLEX);
    newDiv_d_flex.appendChild(newDiv_img_cont);
    newDiv_d_flex.appendChild(newDiv_user_info);
    //create class card_header and append class d_flex to class card_header
    const newDiv_card_header = create_div(NAME_DIV_card_header);
    newDiv_card_header.appendChild(newDiv_d_flex);
    return newDiv_card_header
}
//create class card body of user
function create_card_body_user(message){
      
    //create class msg_cotainer_send
    const newDiv_msg_cotainer_send = create_div(NAME_CLASS_msg_cotainer_send);
    newDiv_msg_cotainer_send.innerHTML = message;
    // // create class img_cont_msg
    const newDiv_img_cont_msg = create_div(NAME_CLASS_img_cont_msg);
    const newImg_img_cont_msg = create_img("",PATH_USER_IMG);
    newDiv_img_cont_msg.appendChild(newImg_img_cont_msg);
    // // create class d-flex justify-content-end mb-4
    const newDiv_flex_justify_content = create_div(NAME_CLASS_flex_justify_content);
    newDiv_flex_justify_content.appendChild(newDiv_msg_cotainer_send)
    newDiv_flex_justify_content.appendChild(newDiv_img_cont_msg)
    return newDiv_flex_justify_content

}
//create class card body of bot
function create_card_body_bot(message){
    // // create class img_cont_msg
    const newDiv_img_cont_msg = create_div(NAME_CLASS_img_cont_msg);
    const newImg_img_cont_msg = create_img(NAME_CLASS_IMG_img_cont_msg,PATH_BOT_IMG);
    newDiv_img_cont_msg.appendChild(newImg_img_cont_msg);
    //create class msg_cotainer
    const newDiv_msg_cotainer = create_div(NAME_CLASS_msg_cotainer);
    newDiv_msg_cotainer.innerHTML = message
     // // create class d-flex justify-content-start
    const newDiv_flex_justify_content_start = create_div(NAME_CLASS_flex_justify_content_start);
    newDiv_flex_justify_content_start.appendChild(newDiv_img_cont_msg)
    newDiv_flex_justify_content_start.appendChild(newDiv_msg_cotainer)
    return newDiv_flex_justify_content_start
}
//create class card_body 
function create_card_body(data){
    //create class card-body msg_card_body
    const newDiv_card_body = create_div(NAME_CLASS_card_body);
    for(var i=0;i<data.length;i++){
        const newDiv_flex_justify_content_start = create_card_body_bot(data[i]["bot_message"]);
        const newDiv_flex_justify_content = create_card_body_user(data[i]["user_message"]);
        newDiv_card_body.appendChild(newDiv_flex_justify_content_start);
        newDiv_card_body.appendChild(newDiv_flex_justify_content);
        
    }
    return newDiv_card_body
}
//create class card-footer
function create_card_footer(){

    //create class input-group-text
    const newSpan_input_group_text = create_span(NAME_SPAN_input_group_text,"");
    const newImg_input_group_link = create_img(NAME_IMG_input_group_link,PATH_input_group_link);
    newSpan_input_group_text.appendChild(newImg_input_group_link);
    //create class input-group-append
    const newDiv_input_group_append_link= create_div(NAME_CLASS_input_group_append);
    newDiv_input_group_append_link.appendChild(newSpan_input_group_text);
    //create textarea
    const newTextarea = create_textarea(NAME_TEXTAREA_form_control,YOUR_MESSAGE);
    // create class input-group-text-send
    const newSpan_input_group_text_send = create_span(NAME_SPAN_input_group_text_send,"");
    const newImg_input_group_enter = create_img(NAME_IMG_input_group_enter,PATH_input_group_enter);
    newSpan_input_group_text_send.appendChild(newImg_input_group_enter);
    //create class input-group-append
    const newDiv_input_group_append_enter = create_div(NAME_CLASS_input_group_append);
    newDiv_input_group_append_enter.appendChild(newSpan_input_group_text_send);
    //create class input-group
    const newDiv_input_group = create_div(NAME_CLASS_input_group);
    newDiv_input_group.appendChild(newDiv_input_group_append_link);
    newDiv_input_group.appendChild(newTextarea);
    newDiv_input_group.appendChild(newDiv_input_group_append_enter);
    //create class card-footer
    const newDiv_card_footer = create_div(NAME_CLASS_card_footer);
    newDiv_card_footer.appendChild(newDiv_input_group);
    return newDiv_card_footer;
}
//create class card
function create_card(){

    // create class card
    const newDiv_card  = create_div(NAME_CLASS_card);
    const newDiv_card_header = create_card_header();
    const newDiv_card_body = create_card_body();
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
    return newDiv_row_justify_content_center
}