import { useState, useEffect } from 'react'
import Profiles from './Profiles'

function OrgCommittee() {
    const [committees, setCommittees] = useState();
    const [loading, setLoading] = useState(true);
    const API_URL = (import.meta.env.VITE_API_URL + "members/") || 'http://localhost:8000/api/members/';

    useEffect(() => {
        const fetchCommittees = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                const grouped = data.reduce((acc, member) => {
                    const name = member.committee_name;
                    if (!acc[name]) acc[name] = [];
                    acc[name].push(member);
                    return acc;
                }, {});

                const groupedArray = Object.entries(grouped).map(([committee_name, members]) => ({
                    committee_name,
                    members,
                }));

                setCommittees(groupedArray);
            } catch (error) {
                console.error("Failed to fetch committees:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCommittees();
    }, []);

    return (
        <div id="org-committe" className="">
            <h1 className="font-bold text-2xl text-center sm:text-4xl text-sky-700">Organisation Committee</h1>

            {loading ? (
                // 👇 Skeleton or spinner
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 animate-pulse">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-gray-200 rounded-lg p-4 h-48 shadow-inner">
                            <div className="bg-gray-300 h-24 w-24 rounded-full mx-auto mb-3" />
                            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
                        </div>
                    ))}
                </div>
            ) : (
                committees?.map((committee) => (
                    <div key={committee.committee_name}>
                        <Profiles title={committee.committee_name} profiles={committee.members} />
                    </div>
                ))
            )}
        </div>
    );
}

export default OrgCommittee;
