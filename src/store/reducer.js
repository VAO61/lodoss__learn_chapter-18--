import {
  UPDATE_SEARCH_LIST,
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST
} from './constants';

const initialState = {
  searchList: [],
  myList: [
    // {
    //   id: 79710350,
    //   node_id: 'MDEwOlJlcG9zaXRvcnk3OTcxMDM1MA==',
    //   name: 'YRSSF',
    //   full_name: 'Erblocker/YRSSF',
    //   private: false,
    //   owner: {
    //     login: 'Erblocker',
    //     id: 31513616,
    //     node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxNTEzNjE2',
    //     avatar_url: 'https://avatars3.githubusercontent.com/u/31513616?v=4',
    //     gravatar_id: '',
    //     url: 'https://api.github.com/users/Erblocker',
    //     html_url: 'https://github.com/Erblocker',
    //     followers_url: 'https://api.github.com/users/Erblocker/followers',
    //     following_url:
    //       'https://api.github.com/users/Erblocker/following{/other_user}',
    //     gists_url: 'https://api.github.com/users/Erblocker/gists{/gist_id}',
    //     starred_url:
    //       'https://api.github.com/users/Erblocker/starred{/owner}{/repo}',
    //     subscriptions_url:
    //       'https://api.github.com/users/Erblocker/subscriptions',
    //     organizations_url: 'https://api.github.com/users/Erblocker/orgs',
    //     repos_url: 'https://api.github.com/users/Erblocker/repos',
    //     events_url: 'https://api.github.com/users/Erblocker/events{/privacy}',
    //     received_events_url:
    //       'https://api.github.com/users/Erblocker/received_events',
    //     type: 'Organization',
    //     site_admin: false
    //   },
    //   html_url: 'https://github.com/Erblocker/YRSSF',
    //   description:
    //     '一个分布式(p2p)云教学/云课堂/直播平台系统CMS，睿易派的开源替代品',
    //   fork: false,
    //   url: 'https://api.github.com/repos/Erblocker/YRSSF',
    //   forks_url: 'https://api.github.com/repos/Erblocker/YRSSF/forks',
    //   keys_url: 'https://api.github.com/repos/Erblocker/YRSSF/keys{/key_id}',
    //   collaborators_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/collaborators{/collaborator}',
    //   teams_url: 'https://api.github.com/repos/Erblocker/YRSSF/teams',
    //   hooks_url: 'https://api.github.com/repos/Erblocker/YRSSF/hooks',
    //   issue_events_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/issues/events{/number}',
    //   events_url: 'https://api.github.com/repos/Erblocker/YRSSF/events',
    //   assignees_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/assignees{/user}',
    //   branches_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/branches{/branch}',
    //   tags_url: 'https://api.github.com/repos/Erblocker/YRSSF/tags',
    //   blobs_url: 'https://api.github.com/repos/Erblocker/YRSSF/git/blobs{/sha}',
    //   git_tags_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/git/tags{/sha}',
    //   git_refs_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/git/refs{/sha}',
    //   trees_url: 'https://api.github.com/repos/Erblocker/YRSSF/git/trees{/sha}',
    //   statuses_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/statuses/{sha}',
    //   languages_url: 'https://api.github.com/repos/Erblocker/YRSSF/languages',
    //   stargazers_url: 'https://api.github.com/repos/Erblocker/YRSSF/stargazers',
    //   contributors_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/contributors',
    //   subscribers_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/subscribers',
    //   subscription_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/subscription',
    //   commits_url: 'https://api.github.com/repos/Erblocker/YRSSF/commits{/sha}',
    //   git_commits_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/git/commits{/sha}',
    //   comments_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/comments{/number}',
    //   issue_comment_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/issues/comments{/number}',
    //   contents_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/contents/{+path}',
    //   compare_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/compare/{base}...{head}',
    //   merges_url: 'https://api.github.com/repos/Erblocker/YRSSF/merges',
    //   archive_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/{archive_format}{/ref}',
    //   downloads_url: 'https://api.github.com/repos/Erblocker/YRSSF/downloads',
    //   issues_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/issues{/number}',
    //   pulls_url: 'https://api.github.com/repos/Erblocker/YRSSF/pulls{/number}',
    //   milestones_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/milestones{/number}',
    //   notifications_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/notifications{?since,all,participating}',
    //   labels_url: 'https://api.github.com/repos/Erblocker/YRSSF/labels{/name}',
    //   releases_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/releases{/id}',
    //   deployments_url:
    //     'https://api.github.com/repos/Erblocker/YRSSF/deployments',
    //   created_at: '2017-01-22T10:19:31Z',
    //   updated_at: '2019-08-09T08:28:24Z',
    //   pushed_at: '2017-09-24T02:16:56Z',
    //   git_url: 'git://github.com/Erblocker/YRSSF.git',
    //   ssh_url: 'git@github.com:Erblocker/YRSSF.git',
    //   clone_url: 'https://github.com/Erblocker/YRSSF.git',
    //   svn_url: 'https://github.com/Erblocker/YRSSF',
    //   homepage: '',
    //   size: 16081,
    //   stargazers_count: 128,
    //   watchers_count: 128,
    //   language: 'C',
    //   has_issues: true,
    //   has_projects: true,
    //   has_downloads: true,
    //   has_wiki: true,
    //   has_pages: true,
    //   forks_count: 28,
    //   mirror_url: null,
    //   archived: false,
    //   disabled: false,
    //   open_issues_count: 0,
    //   license: {
    //     key: 'gpl-3.0',
    //     name: 'GNU General Public License v3.0',
    //     spdx_id: 'GPL-3.0',
    //     url: 'https://api.github.com/licenses/gpl-3.0',
    //     node_id: 'MDc6TGljZW5zZTk='
    //   },
    //   topics: [
    //     'cloud',
    //     'cloud-computing',
    //     'cryptography',
    //     'education',
    //     'educational-software',
    //     'learning',
    //     'p2p',
    //     'school',
    //     'school-education',
    //     'school-project',
    //     'teach',
    //     'teacher',
    //     'teachers',
    //     'teaching',
    //     'teaching-tool'
    //   ],
    //   forks: 28,
    //   open_issues: 0,
    //   watchers: 128,
    //   default_branch: 'master',
    //   score: 23.37136
    // },
    // {
    //   id: 7862393,
    //   node_id: 'MDEwOlJlcG9zaXRvcnk3ODYyMzkz',
    //   name: 'CMSIS-DAP',
    //   full_name: 'x893/CMSIS-DAP',
    //   private: false,
    //   owner: {
    //     login: 'x893',
    //     id: 211750,
    //     node_id: 'MDQ6VXNlcjIxMTc1MA==',
    //     avatar_url: 'https://avatars2.githubusercontent.com/u/211750?v=4',
    //     gravatar_id: '',
    //     url: 'https://api.github.com/users/x893',
    //     html_url: 'https://github.com/x893',
    //     followers_url: 'https://api.github.com/users/x893/followers',
    //     following_url:
    //       'https://api.github.com/users/x893/following{/other_user}',
    //     gists_url: 'https://api.github.com/users/x893/gists{/gist_id}',
    //     starred_url: 'https://api.github.com/users/x893/starred{/owner}{/repo}',
    //     subscriptions_url: 'https://api.github.com/users/x893/subscriptions',
    //     organizations_url: 'https://api.github.com/users/x893/orgs',
    //     repos_url: 'https://api.github.com/users/x893/repos',
    //     events_url: 'https://api.github.com/users/x893/events{/privacy}',
    //     received_events_url:
    //       'https://api.github.com/users/x893/received_events',
    //     type: 'User',
    //     site_admin: false
    //   },
    //   html_url: 'https://github.com/x893/CMSIS-DAP',
    //   description:
    //     'STM32 port for CMSIS-DAP with additional serial (CDC) support',
    //   fork: false,
    //   url: 'https://api.github.com/repos/x893/CMSIS-DAP',
    //   forks_url: 'https://api.github.com/repos/x893/CMSIS-DAP/forks',
    //   keys_url: 'https://api.github.com/repos/x893/CMSIS-DAP/keys{/key_id}',
    //   collaborators_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/collaborators{/collaborator}',
    //   teams_url: 'https://api.github.com/repos/x893/CMSIS-DAP/teams',
    //   hooks_url: 'https://api.github.com/repos/x893/CMSIS-DAP/hooks',
    //   issue_events_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/issues/events{/number}',
    //   events_url: 'https://api.github.com/repos/x893/CMSIS-DAP/events',
    //   assignees_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/assignees{/user}',
    //   branches_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/branches{/branch}',
    //   tags_url: 'https://api.github.com/repos/x893/CMSIS-DAP/tags',
    //   blobs_url: 'https://api.github.com/repos/x893/CMSIS-DAP/git/blobs{/sha}',
    //   git_tags_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/git/tags{/sha}',
    //   git_refs_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/git/refs{/sha}',
    //   trees_url: 'https://api.github.com/repos/x893/CMSIS-DAP/git/trees{/sha}',
    //   statuses_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/statuses/{sha}',
    //   languages_url: 'https://api.github.com/repos/x893/CMSIS-DAP/languages',
    //   stargazers_url: 'https://api.github.com/repos/x893/CMSIS-DAP/stargazers',
    //   contributors_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/contributors',
    //   subscribers_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/subscribers',
    //   subscription_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/subscription',
    //   commits_url: 'https://api.github.com/repos/x893/CMSIS-DAP/commits{/sha}',
    //   git_commits_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/git/commits{/sha}',
    //   comments_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/comments{/number}',
    //   issue_comment_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/issues/comments{/number}',
    //   contents_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/contents/{+path}',
    //   compare_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/compare/{base}...{head}',
    //   merges_url: 'https://api.github.com/repos/x893/CMSIS-DAP/merges',
    //   archive_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/{archive_format}{/ref}',
    //   downloads_url: 'https://api.github.com/repos/x893/CMSIS-DAP/downloads',
    //   issues_url: 'https://api.github.com/repos/x893/CMSIS-DAP/issues{/number}',
    //   pulls_url: 'https://api.github.com/repos/x893/CMSIS-DAP/pulls{/number}',
    //   milestones_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/milestones{/number}',
    //   notifications_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/notifications{?since,all,participating}',
    //   labels_url: 'https://api.github.com/repos/x893/CMSIS-DAP/labels{/name}',
    //   releases_url: 'https://api.github.com/repos/x893/CMSIS-DAP/releases{/id}',
    //   deployments_url:
    //     'https://api.github.com/repos/x893/CMSIS-DAP/deployments',
    //   created_at: '2013-01-28T03:19:57Z',
    //   updated_at: '2019-08-19T06:14:56Z',
    //   pushed_at: '2016-11-28T16:58:45Z',
    //   git_url: 'git://github.com/x893/CMSIS-DAP.git',
    //   ssh_url: 'git@github.com:x893/CMSIS-DAP.git',
    //   clone_url: 'https://github.com/x893/CMSIS-DAP.git',
    //   svn_url: 'https://github.com/x893/CMSIS-DAP',
    //   homepage: 'http://akb77.com/g/stm32/cmsis-dap-adapter/',
    //   size: 2145,
    //   stargazers_count: 270,
    //   watchers_count: 270,
    //   language: 'C',
    //   has_issues: true,
    //   has_projects: true,
    //   has_downloads: true,
    //   has_wiki: false,
    //   has_pages: false,
    //   forks_count: 159,
    //   mirror_url: null,
    //   archived: false,
    //   disabled: false,
    //   open_issues_count: 3,
    //   license: null,
    //   forks: 159,
    //   open_issues: 3,
    //   watchers: 270,
    //   default_branch: 'master',
    //   score: 67.91815
    // }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload
      };
    case ADD_TO_MY_LIST:
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case REMOVE_FROM_MY_LIST:
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
