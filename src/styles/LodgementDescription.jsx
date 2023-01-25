import styled from "styled-components"

const LodgementInfos = styled.section`
	display : flex;
	justify-content : space-between;
	width : 86% ;
	padding : 0 3% 0 7%;
	flex-wrap : wrap;
	
`
const Div = styled.div`
	width : 50%
	`
const DivDos = styled.div`
		
	background-color : lightgreen;
	width : 50%
`
const DivTres = styled.div`
	display : flex;		
	background-color : blue;
	width : 100%
`

const Title = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
color: #FF6060;	
`
const Location = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #FF6060;	
`
const ListTags = styled.ul`
	display : flex;
	list-style : none;
	padding : 0 ;
`
const TagElement  = styled.li`
padding : 0.5rem 0.75rem 0.5rem 0.75rem;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: #FFFFFF;
background: #FF6060;
border-radius: 10px;
margin : 0 1rem 0 0;

`
const Infos = styled.div`
	display : flex;
	justify-content : flex-end;
`
const LandlordName = styled.p`
	
`
const LandlordPicture = styled.img`
	border-radius : 50%;
	width : 5rem;
	height : 5rem;
	margin : 1rem 1rem 0 0;
`
const WrapperStars = styled.div`

`
const Stars = styled.img`
	
`
export { Div, DivDos, DivTres, LodgementInfos, Title, Location, ListTags, TagElement, Infos, WrapperStars, Stars, LandlordName, LandlordPicture }
