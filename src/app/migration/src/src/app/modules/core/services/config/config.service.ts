import { Injectable } from '@angular/core';
import * as  urlConfig from './url.config.json';
import * as  appConfig from './app.config.json';
import * as  dropDownConfig from './dropdown.config.json';
import * as  rolesConfig from './roles.config.json';

/**
 * Service to fetch config details.
 *
 */
@Injectable()
export class ConfigService {
/**
 * property containing url config
 *
 */
urlConFig = (<any>urlConfig);
/**
 * property containing app config
 *
 */
pageConfig = (<any>appConfig);
/**
 * property containing drop down config
 *
 */
  dropDownConfig = (<any>dropDownConfig);
/**
 * property containing roles config
 *
 */
  rolesConfig = (<any>rolesConfig);
}

// export interface UrlConfig {
//   'params': {
//     'userReadParam': {
//         'fields': 'completeness,missingFields,lastLoginTime'
//     }
//   };
//   'URLS': {
//       'LEARNER_PREFIX': '/learner/',
//       'CONTENT_PREFIX': '/content/',
//       'ANNOUNCEMENT_PREFIX': '/announcement/v1',
//       'RESOURCEBUNDLES_PREFIX': 'resourcebundles/v1',
//       'RESOURCEBUNDLES': {
//           'ENG': '/read'
//       },
//       'USER': {
//           'SIGNUP': 'user/v1/create',
//           'UPDATE_USER_PROFILE': 'user/v1/update',
//           'GET_PROFILE': 'user/v1/read/',
//           'TENANT_LOGO': 'get/tenant/logo',
//           'SKILLS': 'data/v1/skills',
//           'ADD_SKILLS': 'user/v1/skill/add',
//           'USER_SKILLS': 'user/v1/skill/read',
//           'UPDATE_PROF_VIS_FIELDS': 'user/v1/profile/visibility'
//       },
//       'COMPOSITE': {
//           'SEARCH': 'composite/v1/search'
//       },
//       'COURSE': {
//           'SEARCH': 'course/v1/search',
//           'HIERARCHY': 'course/v1/hierarchy',
//           'USER_CONTENT_STATE_READ': 'course/v1/content/state/read',
//           'USER_CONTENT_STATE_UPDATE': 'course/v1/content/state/update',
//           'GET_ENROLLED_COURSES': 'course/v1/user/enrollment/list',
//           'ENROLL_USER_COURSE': 'course/v1/enrol',
//           'RECOMMENDED_COURSE': 'recommended/courses'
//       },
//       'CONTENT': {
//           'SEARCH': 'content/v1/search',
//           'CREATE': 'content/v1/create',
//           'PUBLISH': 'content/v1/publish',
//           'UPLOAD_MEDIA': 'content/v1/media/upload',
//           'GET': 'content/v1/read',
//           'RETIRE': 'content/v1/retire',
//           'REJECT': 'content/v1/reject',
//           'FLAG': 'content/v1/flag',
//           'ACCEPT_FLAG': 'content/v1/flag/accept',
//           'DISCARD_FLAG': 'content/v1/flag/reject'
//       },
//       'DASHBOARD': {
//           'ORG_CREATION': 'dashboard/v1/creation/org',
//           'ORG_CONSUMPTION': 'dashboard/v1/consumption/org',
//           'COURSE_PROGRESS': 'dashboard/v1/progress/course',
//           'COURSE_CONSUMPTION': 'dashboard/v1/consumption/course'
//       },
//       'NOTES': {
//           'SEARCH': 'notes/v1/search',
//           'CREATE': 'notes/v1/create',
//           'UPDATE': 'notes/v1/update',
//           'GET': 'notes/v1/read',
//           'DELETE': 'notes/v1/delete'
//       },
//       'ROLES': {
//           'READ': 'data/v1/role/read'
//       },
//       'BATCH': {
//           'CREATE': 'course/v1/batch/create',
//           'UPDATE': 'course/v1/batch/update',
//           'ADD_USERS': 'course/v1/batch/user/add',
//           'GET_DETAILS': 'course/v1/batch/read',
//           'GET_BATCHS': 'course/v1/batch/list'
//       },
//       'ADMIN': {
//           'USER_SEARCH': 'user/v1/search',
//           'ORG_SEARCH': 'org/v1/search',
//           'BULK': {
//               'USERS_UPLOAD': 'user/v1/upload',
//               'ORGANIZATIONS_UPLOAD': 'org/v1/upload',
//               'STATUS': 'data/v1/upload/status'
//           },
//           'DELETE_USER': 'user/v1/block',
//           'UPDATE_USER_ORG_ROLES': 'org/v1/role/assign'
//       },
//       'BADGE': {
//           'GET': 'org/v1/badges/list',
//           'ASSIGN': 'user/v1/badges/add'

//       },
//       'ORG_TYPE': {
//           'GET': 'org/v1/type/list',
//           'ADD': 'org/v1/type/create',
//           'UPDATE': 'org/v1/type/update'
//       },
//       'ANNOUNCEMENT': {
//         'OUTBOX_LIST': '/user/outbox',
//         'INBOX_LIST': '/user/inbox',
//         'CREATE': '/create',
//         'GET_BY_ID': '/get/',
//         'RESEND': '/resend/',
//         'DEFINITIONS': '/definitions',
//         'READ': '/read',
//         'RECEIVED': '/received',
//         'CANCEL': '/v1/cancel'
//       },
//       'CHANNEL': {
//           'READ': 'channel/v1/read'
//       },
//       'FRAMEWORK': {
//           'READ': 'framework/v1/read'
//       }
//   };
// }
