using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Planet : MonoBehaviour
{
    const float GRAVITY_CONSTANT = 0.02f;

    [SerializeField]
    Sun sun;

    [SerializeField]
    float mass = 1.0f;

    [SerializeField]
    Vector3 initialVelocity = new Vector3(0, 0, 0);

    Vector3 velocity;

    private void Awake()
    {
        velocity = new Vector3(initialVelocity.x, initialVelocity.y, initialVelocity.z);
    }

    private Vector3 GetGravityForce()
    {
        var sunPosition = sun.transform.position;
        var distanceToSun = sunPosition - transform.position;
        var gravityValue = GRAVITY_CONSTANT * sun.mass * mass / Mathf.Pow(distanceToSun.magnitude, 2);
        return distanceToSun.normalized * gravityValue;
    }

    private Vector3 GetCentrifugalForce()
    {
        var sunPosition = sun.transform.position;
        var distanceToSun = sunPosition - transform.position;
        var centrifugalForceValue = mass * Mathf.Pow(velocity.magnitude, 2) / distanceToSun.magnitude;
        return -distanceToSun.normalized * centrifugalForceValue;
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        var gravity = GetGravityForce();
        var centrifugal = GetCentrifugalForce();

        var force = gravity + centrifugal;

        Debug.Log("+++");
        Debug.Log(gravity.magnitude);
        Debug.Log(centrifugal.magnitude);
        Debug.Log(force.magnitude);

        velocity += force;

        transform.position += velocity;
    }
}
