import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TopicsService {

    constructor() {
    }

    topics() {
        return [
            {text: 'Trends', model: 'trends'},
            {text: 'New Ideas', model: 'newIdeas'},
            {text: 'Sales and Marketing', model: 'salesAndMarketing'},
            {text: 'New Markets and Programs', model: 'newMarketsAndPrograms'},
            {text: 'Personal Auto', model: 'personalAuto'},
            {text: 'Commercial Auto', model: 'commercialAuto'},
            {text: 'Homeowners', model: 'homeowners'},
            {text: 'Professional Liability', model: 'professionalLiability'},
            {text: 'Errors and Omissions', model: 'errorsAndOmissions'},
            {text: 'Directors and Officers', model: 'directorsAndOfficers'},
            {text: 'Contractors', model: 'contractors'},
            {text: 'Construction', model: 'construction'},
            {text: 'Agribusiness', model: 'agribusiness'},
            {text: 'Workers\' Comp', model: 'workersComp'},
            {text: 'Hospitality', model: 'hospitality'},
            {text: 'Hotels', model: 'hotels'},
            {text: 'Restaurant and Bars', model: 'restaurantAndBars'},
            {text: 'Entertainment', model: 'entertainment'},
            {text: 'Events / Sports', model: 'eventsSports'},
            {text: 'Medical', model: 'medical'},
            {text: 'Trucking', model: 'trucking'},
            {text: 'Cyber', model: 'cyber'},
            {text: 'Umbrellas', model: 'umbrellas'},
            {text: 'Underwriting', model: 'underwriting'},
            {text: 'Claims', model: 'claims'},
            {text: 'Insurers', model: 'insurers'},
            {text: 'Agents', model: 'agents'},
            {text: 'MGAs / Wholesalers', model: 'mgasWholesalers'},
            {text: 'Industry Jobs', model: 'industryJobs'},
            {text: 'Industry Events', model: 'industryEvents'},
        ];
    }
}
