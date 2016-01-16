import * as _ from 'lodash';

import observableFactory, { Observable } from '../common/observable-factory';

import { Profile } from './auth.interface';

let userProfile: Profile;

export const observable: Observable = observableFactory();

export function isAuthenticated(): boolean {
    return !!userProfile;
}

export function getProfile(): Profile {
    return _.cloneDeep(userProfile);
}

export function setProfile(profile: Profile) {
    userProfile = profile;
    observable.notifyAll();
}
