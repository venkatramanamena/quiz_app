var data = 
[
    {"id":1,"answer":3,"question":"Which was not one of Voldemort's Horcruxes?","options":["Harry","Nagini","Helga's Diadem","Tom Riddle's Diary"]},
    {"id":2,"answer":1,"question":"Which of these are not one of Hagrid's many pets?","options":["Grawp","Fluffy","Aragog","Noberta"]},
    {"id":3,"answer":3,"question":"Which class did Severus Snape always want to teach?","options":["Potions","Charms","Defense Against Dark Arts","Transfiguration"]},
    {"id":4,"answer":3,"question":"Which Hogwarts house did Moaning Myrtle belong in?","options":["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]},
    {"id":5,"answer":2,"question":"What class did Neville end up teaching at Hogwarts?","options":["Astronomy","Herbology","Charms","Muggle Studies"]}
];

var mainpart = document.getElementById("backcover");
var  res = 0;
var form_page = document.createElement("form");
form_page.id = "form1";
mainpart.appendChild(form_page);

var scorepart = document.getElementById("scor");
var flex = document.createElement("div")
flex.className = "score";
scorepart.appendChild(flex);

var  score_para = document.createElement("p");
score_para.innerText = "Score:";
score_para.className ="score_para"
flex.appendChild(score_para);
var score_res = document.createElement("p");
score_res.className = "score_res";
score_res.innerText = res+"/"+data.length;
flex.appendChild(score_res);

for(var i = 0;i<data.length;i++)
{
        var linke = document.createElement("div");
        linke.className = "box";
        form_page.appendChild(linke);

        var question = document.createElement("p");
        question.className = "question_block";
        question.innerText = "Q"+data[i].id+"."+data[i].question;
        linke.appendChild(question);



        for(var j = 0;j<data[i].options.length;j++)
        {

            var inside_box = document.createElement("div");
            inside_box.className = "box_inside";
            linke.appendChild(inside_box);

            var four_options = document.createElement("input");
            four_options.type = "radio";
            four_options.className = "ji";
            four_options.id = data[i].options[j];
            four_options.name = i;
            inside_box.appendChild(four_options);
            var val = document.createElement("p");
            val.className = "opts"
            val.innerText = data[i].options[j];
            inside_box.appendChild(val);
        }

        var line = document.createElement("div");
        line.className = "underLIne";
        
        linke.appendChild(line);

}
 var btn_div = document.createElement("div");
 btn_div.className = "btn_div";
 linke.appendChild(btn_div);
var btn = document.createElement("input");
btn.type="submit"
btn.id = "Submit"
btn.value = "submit";
btn_div.appendChild(btn);

var string_array = [];


var result = document.getElementById("form1");

result.addEventListener("submit",function(e)
{
 
e.preventDefault();
console.log("form is submitted");
for(var i = 0;i < data.length;i++)
{
    for(var j = 0;j<data[i].options.length;j++)
    {
        var find = document.getElementById(data[i].options[j]);

        if(find.checked)
        {
            string_array[i] = j+1;
           
        }
    }

    if(string_array[i] == data[i].answer)
    {
        res += 1; 
    }
    
}
});

result.addEventListener("submit",function(e)
{
e.preventDefault();

if(res > data.length)
{
    res = res - data.length;
    score_res.innerText = res+"/"+data.length;
}
else
{
    score_res.innerText = res+"/"+data.length;
}
res = 0;
});








