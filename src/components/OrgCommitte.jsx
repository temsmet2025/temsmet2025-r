import {
    patrons, honoraryChair, generalChairs, generalCoChairs,
    financeCommitteeConferenceSecretaries, programChairs,
    technicalProgrammeCommittee, informationCommittee,
    publicationCommittee, webMasterAndTechnicalCoordinationCommittee,
    localOrganizingCommittee, volunteers
} from './../assets/orgCommitteeItems'
import Profiles from './Profiles'
function OrgCommittee() {
    return (
        <div id={`org-committe`} className="p-5 mt-10 sm:p-5 md:ml-7 md:mr-5 lg:ml-10 lg:mr-10">
            <h1 className='font-bold text-2xl text-center sm:text-4xl text-sky-700'> Organisation Committee </h1>
            <Profiles title="Patrons" profiles={patrons} />
            <Profiles title="Honorary Chair" profiles={honoraryChair} />
            <Profiles title="General Chairs" profiles={generalChairs} />
            <Profiles title="General Co-Chairs" profiles={generalCoChairs} />
            <Profiles title="Finance Committee Conference Secretaries" profiles={financeCommitteeConferenceSecretaries} />
            <Profiles title="Program Chairs" profiles={programChairs} />
            <Profiles title="Technical Programme Committee" profiles={technicalProgrammeCommittee} />
            <Profiles title="Information Committee" profiles={informationCommittee} />
            <Profiles title="Publication Committee" profiles={publicationCommittee} />
            <Profiles title="Web-Master And Technical Coordination Committee" profiles={webMasterAndTechnicalCoordinationCommittee} />
            <Profiles title="Local Organizing Committee" profiles={localOrganizingCommittee} />
            <Profiles title="Volunteers" profiles={volunteers} />
        </div>

    )
}
export default OrgCommittee