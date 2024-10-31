import {
    patrons, honoraryChair, generalChairs, generalCoChairs,
    financeCommitteeConferenceSecretaries, programChairs,
    technicalProgrammeCommittee, informationCommittee, 
    publicationCommittee, webMasterAndTechnicalCoordinationCommittee,
    localOrganizingCommittee
} from './../assets/orgCommitteeItems'
import Profiles  from './Profiles'
function OrgCommittee() {
    return (
        <div id={`org-committe`} className="ml-32 mr-32 mt-10 mb-10">
            <h1 className='font-bold text-4xl '> Organisation Committee </h1>
            <Profiles title="Patrons" profiles = {patrons} />
            <Profiles title="General Chairs" profiles = {generalChairs} />
            <Profiles title="General Co-Chairs" profiles = {generalCoChairs} />
            <Profiles title="Finance Committee Conference Secretaries" profiles = {financeCommitteeConferenceSecretaries} />
            <Profiles title="Technical Programme Committee" profiles = {technicalProgrammeCommittee} />
            <Profiles title="Information Committee" profiles = {informationCommittee} />
            <Profiles title="Publication Committee" profiles = {publicationCommittee} />
            <Profiles title="Honorary Chair" profiles = {honoraryChair} />
            <Profiles title="Web-Master And Technical Coordination Committee" profiles = {webMasterAndTechnicalCoordinationCommittee} />
            <Profiles title="Local Organizing Committee" profiles = {localOrganizingCommittee} />
        </div>
        
    )
}
export default OrgCommittee