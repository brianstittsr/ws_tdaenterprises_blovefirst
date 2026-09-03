#!/usr/bin/env node

/**
 * Seed Firestore collections via REST API.
 *
 * Uses the public Firebase web API key because the deployed Firestore security
 * rules are open for development (allow write: if true for most collections).
 *
 * Generated from firebase apps:sdkconfig WEB on 2026-09-03.
 */

const https = require('https');

const projectId = 'treymayneanderson-tda';
const apiKey = 'AIzaSyBwTF2JYjlwmGruI1PswcapPVms9TINMpk';

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

function toFirestoreFields(value) {
  if (value === null || value === undefined) {
    return { nullValue: 'NULL_VALUE' };
  }

  if (typeof value === 'string') {
    return { stringValue: value };
  }

  if (typeof value === 'boolean') {
    return { booleanValue: value };
  }

  if (typeof value === 'number') {
    if (Number.isInteger(value)) {
      return { integerValue: String(value) };
    }
    return { doubleValue: value };
  }

  if (value instanceof Date) {
    return { timestampValue: value.toISOString() };
  }

  if (Array.isArray(value)) {
    return {
      arrayValue: {
        values: value.map((item) => toFirestoreFields(item)),
      },
    };
  }

  if (typeof value === 'object') {
    const fields = {};
    for (const [key, val] of Object.entries(value)) {
      if (val !== undefined) {
        fields[key] = toFirestoreFields(val);
      }
    }
    return { mapValue: { fields } };
  }

  return { stringValue: String(value) };
}

function request(method, path, body) {
  const url = `${baseUrl}${path}?key=${apiKey}`;
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        method,
        headers: { 'Content-Type': 'application/json' },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          let parsed;
          try {
            parsed = JSON.parse(data);
          } catch {
            parsed = data;
          }
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${JSON.stringify(parsed)}`));
          }
        });
      }
    );
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

const now = new Date();

const teamMembers = [
  { firstName: 'Al', lastName: 'Lenac', emailPrimary: 'al@manufacftureresults.com', emailSecondary: 'albertlenac@gmail.com', mobile: '(973) 723-7448', expertise: 'R&D Tax Credits', role: 'affiliate', status: 'active' },
  { firstName: 'Alex', lastName: 'West', emailPrimary: 'alex@itscnow.com', mobile: '(518) 801-7315', expertise: 'Cybersecurity Consulting', role: 'affiliate', status: 'active' },
  { firstName: 'Alysha', lastName: 'Campbell', emailPrimary: 'alysha@cultureshifthr.com', expertise: 'Human Resources', role: 'affiliate', status: 'active' },
  { firstName: 'Brett', lastName: 'Heyns', emailPrimary: 'brett@getcompoundeffect.com', expertise: 'Advanced Marketing/Bus Dev', role: 'affiliate', status: 'active' },
  { firstName: 'Brian', lastName: 'Stitt', emailPrimary: 'bstitt@strategicvalueplus.com', emailSecondary: 'brianstittsr@gmail.com', mobile: '(919) 608-3415', expertise: 'Advanced Technology/Robotics', role: 'superadmin', status: 'active' },
  { firstName: 'Brian', lastName: 'McCollough', emailPrimary: 'bmccollough@nextstagefl.net', mobile: '(801) 719-0076', expertise: 'Operations', role: 'affiliate', status: 'active' },
  { firstName: 'Cass', lastName: 'Gibson', emailPrimary: 'cassgibson@coststudy.us', emailSecondary: 'cass@tapeismoney.com', mobile: '(717) 858-3150', expertise: 'Cost Segregation', role: 'affiliate', status: 'active' },
  { firstName: 'Christine', lastName: 'Nolan', emailPrimary: 'christine.nolan@pines-optimization.com', emailSecondary: 'canolan912@gmail.com', mobile: '(215) 808-0035', expertise: 'Inventory/Supply Chain', role: 'affiliate', status: 'active' },
  { firstName: 'Daniel', lastName: 'Sternklar', emailPrimary: 'linkedin@view3d.tv', mobile: '(301) 576-6176', expertise: 'Learning Platforms/Metaverses', role: 'affiliate', status: 'active' },
  { firstName: 'Dave', lastName: 'McFarland', emailPrimary: 'dmcfarland@strategicvalueplus.com', emailSecondary: 'dave@focusopex.com', mobile: '(217) 377-2234', expertise: 'Operations/Finance', role: 'team', status: 'active' },
  { firstName: 'Dave', lastName: 'Myers', emailPrimary: 'dave@dmdigi.io', expertise: 'Marketing/Branding', role: 'affiliate', status: 'active' },
  { firstName: 'David', lastName: 'McFeeters-Krone', emailPrimary: 'dmk@intelassets.com', expertise: 'Intellectual Property', role: 'affiliate', status: 'active' },
  { firstName: 'David', lastName: 'Ziton', emailPrimary: 'dziton@victory-as.com', expertise: 'IT/CPA', role: 'affiliate', status: 'active' },
  { firstName: 'Ed', lastName: 'Porter', emailPrimary: 'edport21@gmail.com', expertise: 'Chief Revenue Officer', role: 'affiliate', status: 'active' },
  { firstName: 'Elizabeth', lastName: 'Wu', emailPrimary: 'elizabeth@edd-i.com', mobile: '(404) 706-4854', expertise: 'Cybergovernance for Executives', role: 'affiliate', status: 'active' },
  { firstName: 'Gina', lastName: 'Tabasso', emailPrimary: 'gina@barracudab2b.com', emailSecondary: 'gina.tabasso@gmail.com', mobile: '(330) 421-9185', expertise: 'Project Management/Ops/Six Sigma', role: 'affiliate', status: 'active' },
  { firstName: 'Treymane', lastName: 'Anderson', emailPrimary: 'tdaentrprz@gmail.com', mobile: '(615) 673-4323', expertise: 'Executive Consulting', role: 'superadmin', status: 'active' },
  { firstName: 'Jeremy', lastName: 'Schumacher', emailPrimary: 'jeremyrks@gmail.com', expertise: 'CIO/Privacy', role: 'affiliate', status: 'active' },
  { firstName: 'John', lastName: 'Kloian', emailPrimary: 'john@specdyn.com', emailSecondary: 'john.kloian@gmail.com', expertise: 'Chief Revenue Officer/Gap Assessments', role: 'affiliate', status: 'active' },
  { firstName: 'Jose Luis', lastName: 'Ferandez', emailPrimary: 'joseluisfernandez88@gmail.com', emailSecondary: 'josefernandez@salesfyconsulting.com', expertise: 'Executive AI Training/Coaching', role: 'affiliate', status: 'active' },
  { firstName: 'Justice', lastName: 'Darko', emailPrimary: 'jdarko@strategicvalueplus.com', expertise: 'Project Management/Ops/Six Sigma', role: 'team', status: 'active' },
  { firstName: 'Karena', lastName: 'Bell', emailPrimary: 'karena@profitlinz.com', mobile: '843-804-7151', expertise: 'Financial Trouble-Shooter/Strategist/Problem Solver', role: 'affiliate', status: 'active' },
  { firstName: 'Kham', lastName: 'Inthirath', emailPrimary: 'kham@getcompoundeffect.com', mobile: '(617) 275-8908', expertise: 'Marketing/Change Management/AI', role: 'affiliate', status: 'active' },
  { firstName: 'L. Joe', lastName: 'Minor', emailPrimary: 'joeandlorie84@live.com', expertise: 'Shop Operations', role: 'affiliate', status: 'active' },
  { firstName: 'Leonard', lastName: 'Fom', emailPrimary: 'leonard@finops-squad.com', emailSecondary: 'leonard_fom@hotmail.com', mobile: '7789223555', expertise: 'CFO/Financial Strategies/Access to Capital', role: 'affiliate', status: 'active' },
  { firstName: 'Maria', lastName: 'Perez', emailPrimary: 'maria@causemarketingconsultant.com', mobile: '(702) 245-7220', expertise: 'Cause Marketing', role: 'affiliate', status: 'active' },
  { firstName: 'Mark', lastName: 'Osborne', emailPrimary: 'mark@ModernRevenueStrategies.com', mobile: '(404) 808-7625', expertise: 'Advanced Marketing/Bus Dev', role: 'affiliate', status: 'active' },
  { firstName: 'Marney', lastName: 'Lumpkin', emailPrimary: 'marney@vasml.com', expertise: 'Back Office Support', role: 'affiliate', status: 'active' },
  { firstName: 'Mike', lastName: 'Liu', emailPrimary: 'mike@freefuse.com', mobile: '(818)-324-0538', expertise: 'Multimedia User-Defined Learning Platforms', role: 'affiliate', status: 'active' },
  { firstName: 'Nate', lastName: 'Hallums', emailPrimary: 'nhallums@strategicvalueplus.com', emailSecondary: 'nate@backyardfishingagency.co', mobile: '(523) 273-7789', expertise: 'Net-No-Cost Wellness Plans that Generate Cash Flow', role: 'team', status: 'active' },
  { firstName: 'Nathan', lastName: 'Tyler', emailPrimary: 'nathan@nsquared.io', expertise: 'Executive Dash Boards', role: 'affiliate', status: 'active' },
  { firstName: 'Nelinia', lastName: 'Varenas', emailPrimary: 'nelinia@stategicvalueplus.com', emailSecondary: 'neliniav@gmail.com', mobile: '(310) 650-0725', expertise: 'CEO', role: 'admin', status: 'active' },
  { firstName: 'Nicholas', lastName: 'Chiselett', emailPrimary: 'nicholas@2bytes.com.au', mobile: '61414247540', expertise: 'Construction On-line Stores', role: 'affiliate', status: 'active' },
  { firstName: 'Philip', lastName: 'Wolfstein', emailPrimary: 'phil@philwolfstein.com', expertise: 'Certified Business Broker', role: 'affiliate', status: 'active' },
  { firstName: 'RC', lastName: 'Caldwell', emailPrimary: 'rc@CaldwellLeanSixSigma.com', mobile: '(937) 367-6743', expertise: 'Black Belt Six Sigma/TOC Expert', role: 'affiliate', status: 'active' },
  { firstName: 'Rick', lastName: 'McPartlin', emailPrimary: 'rick.mcpartlin@therevenuegame.com', mobile: '(800) 757-8377', expertise: 'CRO', role: 'affiliate', status: 'active' },
  { firstName: 'Rosemary', lastName: 'Coates', emailPrimary: 'rcoates@bluesilkconsulting.com', mobile: '(408) 605-8867', expertise: 'Supply Chain/Re- and Nearshoring', role: 'affiliate', status: 'active' },
  { firstName: 'Roy', lastName: 'Dickan', emailPrimary: 'rdickan@strategicalueplus.com', emailSecondary: 'roy@clearchoicemarketinggroup.com', mobile: '(919) 589-3580', expertise: 'CRO', role: 'team', status: 'active' },
  { firstName: 'Ruoyu', lastName: 'Loughry', emailPrimary: 'rloughry@strategicvalueplus.com', emailSecondary: 'ruoyu.loughry@gmail.com', mobile: '(408)390-6514', expertise: 'CPA, Tax', role: 'team', status: 'active' },
  { firstName: 'Russell', lastName: 'Lookadoo', emailPrimary: 'answers@TheHRGuy.biz', mobile: '(801) 808-3681', expertise: 'Fractional CHRO', role: 'affiliate', status: 'active' },
  { firstName: 'Tamara', lastName: 'Litrich', emailPrimary: 'tamara@tlitrichsolutions.com', emailSecondary: 'tmlitrich76@gmail.com', mobile: '(415) 438-0666', expertise: 'Human Resources, Multi-lingual', role: 'affiliate', status: 'active' },
  { firstName: 'Tod', lastName: 'Gotori', emailPrimary: 'tgotori@fivebirdsconsulting.com', emailSecondary: 'tgotori@gmail.com', mobile: '(949) 954-0679', expertise: 'Cybersecurity Consulting', role: 'affiliate', status: 'active' },
  { firstName: 'Vishnu', lastName: 'Rajan', emailPrimary: 'vrthenorth@gmail.com', expertise: 'AI App Builder', role: 'affiliate', status: 'active' },
];

const platformSettings = {
  socialLinks: {
    linkedin: { url: 'https://linkedin.com/company/tda-enterprises', visible: true },
    facebook: { url: 'https://facebook.com/blovefirst', visible: true },
    instagram: { url: 'https://instagram.com/tdaentrprz', visible: true },
    twitter: { url: '', visible: false },
    youtube: { url: '', visible: false },
  },
  integrations: {
    mattermost: { status: 'disconnected' },
    apollo: { status: 'disconnected' },
    gohighlevel: { status: 'disconnected' },
    zoom: { status: 'disconnected' },
    docuseal: { status: 'disconnected' },
    stripe: { status: 'disconnected' },
  },
  llmConfig: {
    provider: 'openai',
    model: 'gpt-4o',
    useOllama: false,
    useOpenAICompatible: false,
  },
  notificationSettings: {
    syncWithMattermost: false,
    inAppEnabled: true,
    browserEnabled: true,
    soundEnabled: true,
  },
  sidebarVisibility: {
    navigation: true, work: true, intelligence: true, admin: true, initiatives: true,
    commandCenter: true, opportunities: true, projects: true, affiliates: true,
    organizations: true, calendar: true, meetings: true, rocks: true, proposals: true,
    goHighLevel: true, askIntellEdge: true, teamMembers: true, strategicPartners: true,
    bookCallLeads: true, settings: true, activityLog: true,
  },
  l83ToolsVisibility: {
    transcription: true, imageGen: true, headshot: true, youtube: true,
    tts: true, crawler: true, pdfOcr: true,
  },
  updatedAt: now,
};

async function seedCollection(collectionId, docs) {
  console.log(`Seeding ${collectionId} with ${docs.length} documents...`);
  let created = 0;
  for (const [index, doc] of docs.entries()) {
    const payload = {
      fields: toFirestoreFields({ ...doc, createdAt: now, updatedAt: now }).mapValue.fields,
    };
    try {
      await request('POST', `/${collectionId}`, payload);
      created += 1;
      process.stdout.write(`  ${created}/${docs.length} created\r`);
    } catch (error) {
      console.error(`\n  Failed to create ${collectionId} #${index + 1}:`, error.message);
    }
  }
  console.log(`\n  ${collectionId}: ${created}/${docs.length} documents created`);
  return created;
}

async function deleteTestPlatformSettings() {
  try {
    const list = await request('GET', '/platformSettings');
    const docs = list.documents || [];
    for (const doc of docs) {
      const fields = doc.fields || {};
      if (fields.seedTest && fields.seedTest.booleanValue === true) {
        const docName = doc.name; // e.g. projects/.../platformSettings/abc123
        const docId = docName.split('/').pop();
        await request('DELETE', `/platformSettings/${docId}`);
        console.log(`  Deleted test platformSettings/${docId}`);
      }
    }
  } catch (error) {
    console.warn('  Could not clean up test platformSettings:', error.message);
  }
}

async function seed() {
  console.log('Seeding Firestore collections...\n');

  await seedCollection('teamMembers', teamMembers);

  console.log('\nSeeding platformSettings/default...');
  try {
    // Use a fixed document id "default" so the app can reference it predictably.
    await request('DELETE', '/platformSettings/default');
  } catch {
    // Ignore if missing
  }

  await request('POST', '/platformSettings?documentId=default', {
    fields: toFirestoreFields(platformSettings).mapValue.fields,
  });
  console.log('  platformSettings/default created');

  await deleteTestPlatformSettings();

  console.log('\nSeeding complete.');
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
