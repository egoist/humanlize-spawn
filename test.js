import test from 'ava'
import execa from 'execa'

test('sync', async t => {
	const {stdout} = await execa.shell('node ./fixture.js')
	t.is(stdout, 'love')
})
