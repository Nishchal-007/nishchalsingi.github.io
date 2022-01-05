/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title: "KMIT R.AI.DIOLOGY:AI driven Mobile and Web platform for Radiology Imaging Diagnostics",
        authors:
            "Dr. R. Devika Rubi, Dr. C. Vaishnavi, Dr. Rajasekaran Subramanian, Nishchal Singi",
        researchYr: 2021,
        citebox: "popup1",
        image: "./assets/images/research-page/radiology.jpg",
        citation: {
            vancouver:
                "https://www.ijmscr.com/asset/images/uploads/16373352562266.pdf",
        },
        abstract:
            "The Radiology images from CT, MRI etc are having complex data structure and stored in a specialized standard like DICOM. As DICOM images contain specialized decryption file format, viewing DICOM images on normal web viewer is difficult. This paper discusses about an AI driven image diagnostics platform, KMITR.AI.DIOLOGY, which performs complete radiology diagnostic workflow i.e.Annotation->Prediction->Visualization. This paper also describes the use of KMIT-R.AI.DIOLOGY for two AI predication models to predict Mammography lesion and Covid CT region. It also discusses about integration between mobile and KMIT R.AI.DIOLOGY platform for radiology imaging diagnostics",
        absbox: "absPopup1",
    },

    // {
    //     title : "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
    //     authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "popup1",
    //     image : "assets/images/research-page/inteferenceNetwork.png",
    //     citation: {
    //         vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 1",
    //     absbox: "absPopup1"
    // },
];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({
            image,
            title,
            authors,
            conferences,
            researchYr,
            citebox,
            citation,
            absbox,
            abstract,
        }) =>
            (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div>
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            <a href="${citation.vancouver}">${citation.vancouver}</a>    
                        </div>
                    </div>
                </td>
            </tr>`)
    );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
