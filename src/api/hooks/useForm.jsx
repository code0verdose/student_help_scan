import {useContext, useState} from 'react'
import { TokenContext } from '../../app/global/providers/TokenProvider/lib/TokenContext';

export const useForm = () => {

  const {token} = useContext(TokenContext)

 const [formData, setFormData] = useState({
   inn: "",
   tonality: "",
   documentCount: 1000,
   limit: 1000,
   startDate: "",
   endDate: "",
   maxFullness: false,
   inBusinessContext: false,
   mainRole: false,
   onlyWithRiskFactors: false,
   includeTechNews: false,
   includeAnnouncements: false,
   includeDigests: false,
 });
  
  const [responseData, setResponseData] = useState([])
  const [responseErr, setResponseErr] = useState([])

 const handleSubmit = (e) => {
   e.preventDefault();

   const requestBody = {
     issueDateInterval: {
       startDate: new Date(formData.startDate).toISOString(),
       endDate: new Date(formData.endDate).toISOString(),
     },
     searchContext: {
       targetSearchEntitiesContext: {
         targetSearchEntities: [
           {
             type: "company",
             sparkId: null,
             entityId: null,
             inn: formData.inn,
             maxFullness: formData.maxFullness,
             inBusinessNews: formData.inBusinessContext,
           },
         ],
         onlyMainRole: formData.mainRole,
         tonality: formData.tonality,
         onlyWithRiskFactors: formData.onlyWithRiskFactors,
         riskFactors: {
           and: [],
           or: [],
           not: [],
         },
         themes: {
           and: [],
           or: [],
           not: [],
         },
       },
       themesFilter: {
         and: [],
         or: [],
         not: [],
       },
     },
     searchArea: {
       includedSources: [],
       excludedSources: [],
       includedSourceGroups: [],
       excludedSourceGroups: [],
     },
     attributeFilters: {
       excludeTechNews: !formData.includeTechNews,
       excludeAnnouncements: !formData.includeAnnouncements,
       excludeDigests: !formData.includeDigests,
     },
     similarMode: "duplicates",
     limit: 1,
     sortType: "sourceInfluence",
     sortDirectionType: "desc",
     intervalType: "month",
     histogramTypes: ["totalDocuments", "riskFactors"],
   };

   // Отправка POST-запроса с requestBody
   if (token) {
     fetch(
       `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SEARCH_HISTOGRAMS}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(requestBody),
       }
     )
       .then((response) => response.json())
       .then((data) => {
         setResponseData(data);
         console.log(data);
       })
       .catch((error) => {
         setResponseErr(error);
         console.error(error);
       });
   }
 };

 const handleChange = (e) => {
   const { name, value, type, checked } = e.target;
   const updatedValue = type === "checkbox" ? checked : value;

   setFormData((prevFormData) => ({
     ...prevFormData,
     [name]: updatedValue,
   }));
 };

 return {
   formData,
   handleSubmit,
   handleChange,
 };
}
